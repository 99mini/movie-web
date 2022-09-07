import React from "react";

import BrowseSectionMain from "../components/BrowseSectionMain";
import BrowseSmallSection from "../components/BrowseSmallSection";

import HomeTitle from "../components/HomeTitle";
import PageSideManger from "../styles/PageSideManger";

function Home() {
  return (
    <PageSideManger>
      <HomeTitle />
      <BrowseSectionMain />
      <BrowseSmallSection />
    </PageSideManger>
  );
}

export default Home;
