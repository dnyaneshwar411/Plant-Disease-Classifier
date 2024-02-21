import ContentBox, { Container } from "../Components/DisplayBoxes";

export default function Blogs() {
  return <Container classes="gap-10 flex-wrap justify-stretch grow">
    <ContentBox classes="w-1/4 aspect-video"></ContentBox>
    <ContentBox classes="w-1/4 aspect-video"></ContentBox>
    <ContentBox classes="w-1/4 aspect-video"></ContentBox>
    <ContentBox classes="w-1/4 aspect-video"></ContentBox>
    <ContentBox classes="w-1/4 aspect-video"></ContentBox>
  </Container>
}