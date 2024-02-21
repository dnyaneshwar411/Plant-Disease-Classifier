import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function WebCamera({ toggleCamera, changeUrl }) {
  const [facingMode, setFacingMode] = useState("user");
  const webcamRef = useRef(null);

  const videoConstraints = {
    facingMode,
  }

  const captureImage = useCallback(function () {
    const imageSrc = webcamRef.current.getScreenshot();
    changeUrl(imageSrc);
    toggleCamera(false);
  }, [webcamRef]);

  return (
    <div className="h-full bg-slae-900 py-10 aspect-square">
      <Webcam height={"100%"} width={"100%"} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} ref={webcamRef} />
      <div className="flex gap-6 w-full py-4 justify-center">
        <ion-icon name="close-circle-outline" onClick={() => toggleCamera(false)}></ion-icon>
        <ion-icon name="radio-button-off-outline" onClick={captureImage}></ion-icon>
        <ion-icon name="sync-outline"></ion-icon>
      </div>
    </div>
  )
}