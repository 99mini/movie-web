import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SliderBtn from "./SliderBtn";
import SlideArticleCell from "./SlideArticleCell";
import Carousel from "./Carousel";

import carouselMembers from "../assets/json/carouselMembers.json";

const BrowseSection = styled.section`
  margin-bottom: 32px;
`;

const SliderDiv = styled.div`
  position: relative;

  &::before {
    left: -40px;
    background: linear-gradient(90deg, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
  }

  &::after {
    right: -40px;
    background: linear-gradient(
      270deg,
      rgb(0, 0, 0) 70%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    z-index: 1;
    width: 40px;
  }
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  padding: 0px 8px;
  cursor: pointer;
  width: 100%;
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  vertical-align: bottom;

  @media screen and (min-width: 62em) {
    width: 50%;
  }
`;

function BrowseSectionComponent() {
  const [isHover, setHover] = useState(false);
  const [sliderArticleCellList, setSliderArticleCellList] = useState([]);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    let members = carouselMembers.members;
    members = Object.values(members);
    setSliderArticleCellList(members);
  }, []);

  return (
    <BrowseSection>
      <SliderDiv onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <SliderBtn direction={"prev"} isHover={isHover} />
        <Carousel>
          {sliderArticleCellList.map((cell, index) => (
            <Li>
              <SlideArticleCell
                key={index}
                subtitle={cell.subtitle}
                title={cell.title}
                explanation={cell.explanation}
                thumbnailSrc={cell.thumbnailSrc}
              ></SlideArticleCell>
            </Li>
          ))}
        </Carousel>
        <SliderBtn direction={"next"} isHover={isHover} />
      </SliderDiv>
    </BrowseSection>
  );
}

export default BrowseSectionComponent;
