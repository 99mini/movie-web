import React, { useState, useEffect } from "react";

import styled from "styled-components";
import SliderComponent from "./SliderComponent";
import SlideArticleCell from "./SlideArticleCell";

import mainContentMembers from "../assets/json/mainContentMembers.json";

const BrowseSection = styled.section`
  margin-bottom: 32px;
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  padding: 0px 8px;
  cursor: pointer;
  width: 100%;
  vertical-align: bottom;
  @media screen and (min-width: 62em) {
    width: 50%;
  }
`;

function BrowseSectionMain() {
  const [sliderArticleCellList, setSliderArticleCellList] = useState([]);

  useEffect(() => {
    let members = mainContentMembers.members;
    members = Object.values(members);
    setSliderArticleCellList(members);
  }, []);

  return (
    <BrowseSection>
      <SliderComponent data={sliderArticleCellList}>
        {sliderArticleCellList.map((cell, index) => (
          <Li key={cell.key}>
            <SlideArticleCell
              subtitle={cell.subtitle}
              title={cell.title}
              explanation={cell.explanation}
              thumbnailSrc={cell.thumbnailSrc}
            ></SlideArticleCell>
          </Li>
        ))}
      </SliderComponent>
    </BrowseSection>
  );
}

export default BrowseSectionMain;
