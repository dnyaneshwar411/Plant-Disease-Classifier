import { Link } from "react-router-dom";
import ContentBox, { Container } from "../Components/DisplayBoxes";

export default function Home() {
  return <div>
    {/* <h1>Welcome to Plantix, Choose for yourself that best fits your work</h1> */}

    <Container classes="gap-10 my-10 flex-col sm:flex-row" style={{ flexDirectio: "row" }}>
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Camera / Image Upload</h3>
        <Link to="/plant-detection">See More</Link>
      </ContentBox>
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Weather Forecast see more</h3>
        <Link to="/weather">See More</Link>
      </ContentBox>
    </Container>

    <Container classes="gap-10 my-10 flex-col sm:flex-row">
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Communities</h3>
        {/* created a component at the bottom of the page */}
        <UL />
        <Link to="/communities">See More</Link>
      </ContentBox>
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Blogs</h3>
        {/* created a component at the bottom of the page */}
        <UL />
        <Link to="/blogs">See More</Link>
      </ContentBox>
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Expert</h3>
        {/* created a component at the bottom of the page */}
        <UL />
        <Link to="/experts">See More</Link>
      </ContentBox>
    </Container>
  </div>
}

function UL() {
  return <ul className="my-10">
    <li className="bg-[#ae35358f] p-8 my-2"></li>
    <li className="bg-[#ae35358f] p-8 my-2"></li>
    <li className="bg-[#ae35358f] p-8 my-2"></li>
  </ul>
}