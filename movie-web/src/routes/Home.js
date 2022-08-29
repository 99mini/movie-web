import React from "react";
import BroweSectionComponent from "../components/BroweSectionComponent";
import HomeTitle from "../components/HomeTitle";
import PageSideManger from "../styles/PageSideManger";

function Home() {
  return (
    <PageSideManger>
      <HomeTitle />
      <BroweSectionComponent />
    </PageSideManger>
  );
}

export default Home;
