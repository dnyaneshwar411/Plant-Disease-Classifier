from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import fastapi
import json
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173/",
    "http://localhost:5173/plant-detection",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("../models/model")


CLASS_NAMES = ["Bacterial_spot", "healthy", "Early_blight", "Late_blight", "Septoria_leaf_spot", "Spider_mites_Two_spotted_spider_mite", 
"Target_Spot", "Tomato_YellowLeaf__Curl_Virus", "Tomato_mosaic_virus"]

@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return fastapi.Response(
        content= json.dumps({
            "class": predicted_class,
            "confidence": float(confidence)
        }),
        media_type="text/plain",
        headers={
            "access-control-allow-origin": "*",
        }
    )

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)