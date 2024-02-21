import { useContext, useRef, useState } from "react";
import { RemoveImage } from "./GetImage";
import { ResultContext } from "../../Contexts/ResultContext";

export default function Image() {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const { predict } = useContext(ResultContext)

  async function checkForResults() {
    try {
      predict(file);
    } catch (err) { console.log(err) }
  }

  function selectFile() {
    if (file) return;
    fileRef.current.click();
  }

  function handleFile(e) {
    if (!e.target.files[0]) return;
    setFile(e.target.files[0]);
  }

  return <div className="relative">
    <input type="file" onChange={handleFile} ref={fileRef} accept="image/*" className="cursor-pointer" hidden />
    <div className="w-full aspect-square border border-dashed flex justify-center items-center cursor-pointer mb-4" onClick={selectFile}>
      {
        file
          ?
          <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" />
          :
          <>
            <ion-icon name="image-outline"></ion-icon>
            <p>&nbsp;select image</p>
          </>
      }
    </div>
    {
      file &&
      <>
        <button onClick={checkForResults}>Predict</button>
        <RemoveImage setter={setFile} />
      </>
    }
  </div>
}