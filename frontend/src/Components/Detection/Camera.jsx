import { useContext, useState } from "react";

import { RemoveImage } from "./GetImage";
import WebCamera from "./WebCamera";
import { ResultContext } from "../../Contexts/ResultContext";

export default function Camera() {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [url, setUrl] = useState(null);

  const { predict } = useContext(ResultContext);

  const toggleCamera = (val) => setIsCameraOn(val);

  const changeUrl = (url) => setUrl(url)

  function checkForResults() {
    const image = new Image()
    image.src = url;
    predict(image)
  }

  return (
    <div className="w-full relative aspect-square border border-dashed flex flex-col gap-5 justify-center items-center cursor-pointer mb-4" onClick={() => console.log("open camera")}>
      {isCameraOn && <WebCamera toggleCamera={toggleCamera} changeUrl={changeUrl} />}
      {!isCameraOn && !url && <button onClick={() => toggleCamera(true)}>turn On Camera</button>}
      {!isCameraOn && url && <img src={url} className="w-full" />}
      {!isCameraOn && url &&
        <div>
          <button onClick={checkForResults}>Predict</button>
          <button className="ml-4" onClick={() => toggleCamera(true)}>Camera</button>
          <RemoveImage setter={() => changeUrl("")} />
        </div>}
    </div>)
}

