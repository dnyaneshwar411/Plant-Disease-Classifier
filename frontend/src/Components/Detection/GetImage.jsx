import Camera from "./Camera";
import Image from "./Image";

export default function GetImage({ isCameraOpen, isImageOpen, toggleCamera, toggleImage }) {
  return (
    <>
      <button onClick={toggleCamera} className="mx-2 mb-10">
        <ion-icon name="camera-outline"></ion-icon>
      </button>
      <button onClick={toggleImage} className="mx-2 mb-10">
        <ion-icon name="image-outline"></ion-icon>
      </button>
      {isCameraOpen && <Camera />}
      {isImageOpen && <Image />}
    </>
  )
}

export function RemoveImage({ setter }) {
  function removeImage() {
    setter(null)
  }
  return (
    <span className="rounded-full bg-black aspect-square pt-2 px-2 absolute top-5 right-5 z-2">
      <ion-icon name="close-outline" onClick={removeImage}></ion-icon>
    </span>
  )
}