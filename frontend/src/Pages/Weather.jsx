import ContentBox, { Container } from "../Components/DisplayBoxes"

export default function Weather() {
  return <Container classes="gap-10">
    <ContentBox classes="w-1/2 aspect-video">
      <h2>Weather Map of the region</h2>
    </ContentBox>
    <ContentBox classes="w-1/2 aspect-video">
      <h2 className="mb-4">Question related to weather </h2>
      <ul>
        <li>is it good time to take any crop ?</li>
        <li>When can it rain ?</li>
      </ul>
    </ContentBox>
  </Container>
}