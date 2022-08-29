import React from "react";
import BrowseSectionComponent from "../components/BrowseSectionComponent";
import HomeTitle from "../components/HomeTitle";
import PageSideManger from "../styles/PageSideManger";

function Home() {
  return (
    <PageSideManger>
      <HomeTitle />
      <BrowseSectionComponent />
    </PageSideManger>
  );
}

export default Home;
