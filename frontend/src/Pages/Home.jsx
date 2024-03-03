import { Link } from "react-router-dom";
import ContentBox, { Container } from "../Components/DisplayBoxes";
import { useContext, useEffect, useState } from "react";
import { CommunityContext } from "../Contexts/CommunityContext";
import { Community } from "../Components/Communities/CommunityList";

export default function Home() {
  const [communities, setCommunities] = useState([]);
  const { communities: gotCommunities, getCommunities } = useContext(CommunityContext);

  useEffect(function () {
    getCommunities()
    setCommunities(gotCommunities.slice(0, 4));
  }, [setCommunities, gotCommunities]);

  return <div>
    {/* <h1>Welcome to Plantix, Choose for yourself that best fits your work</h1> */}

    <Container classes="gap-10 my-10 flex-col sm:flex-row" style={{ flexDirectio: "row" }}>
      <ContentBox classes={'flex flex-col w-full sm:w-1/2 aspect-video items-center justify-center'}>
        <Link to="/plant-detection">
          <h3 className="mb-4">Select an image or click a picture</h3>
          <div>
            <ion-icon name="camera-outline" style={{ marginInline: "10px", fontSize: "3rem" }} />
            <ion-icon name="image-outline" style={{ marginInline: "10px", fontSize: "3rem" }} />
          </div>
        </Link>
      </ContentBox>
      <ContentBox classes={'w-full sm:w-1/2 aspect-video'}>
        <h3>Weather Forecast see more</h3>
        <Link to="/weather">See More</Link>
      </ContentBox>
    </Container>

    <Container classes="gap-10 my-10 flex-col sm:flex-row">
      <ContentBox classes={'w-full flex flex-col justify- sm:w-1/2 aspect-video'}>
        <h3 className="mb-10">Communities</h3>
        <div>
          {communities.map(community => <Community key={community.id} community={community} />)}
        </div>
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