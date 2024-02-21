import { useState } from "react";

import ContentBox, { Container } from "../Components/DisplayBoxes";

import Result from "../Components/Detection/Result";
import GetImage from "../Components/Detection/GetImage";
import { ResultProvider } from "../Contexts/ResultContext";

export default function Detection() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  function toggleCamera() {
    setIsCameraOpen(prev => !prev);
    setIsImageOpen(false);
  }
  function toggleImage() {
    setIsImageOpen(prev => !prev);
    setIsCameraOpen(false);
  }

  return (
    <ResultProvider>
      <Container classes="my-10 flex-col sm:flex-row color-secondar gap-10 items-start">
        <ContentBox classes="w-full aspect-video sm:w-1/2">
          <GetImage isCameraOpen={isCameraOpen} isImageOpen={isImageOpen} toggleCamera={toggleCamera} toggleImage={toggleImage} />
        </ContentBox>
        <ContentBox classes="w-full aspect-video sm:w-1/2">
          <Result />
        </ContentBox>
      </Container>
    </ResultProvider>
  )
}