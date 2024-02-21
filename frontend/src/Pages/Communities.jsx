import ContentBox, { Container } from "../Components/DisplayBoxes";

export default function Communities() {
  return <Container classes="border">
    <ContentBox classes="border-r w-[300px] rounded-0 aspect-video" style={{ backgroundColor: "#17151b" }}>
      <h3>Communities Listing</h3>
    </ContentBox>
    <ContentBox classes="w-full aspect-video">
      <h3>Chating</h3>
    </ContentBox>
  </Container>
}
