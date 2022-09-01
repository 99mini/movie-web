import React, { useState } from "react";
import styled from "styled-components";
import PropsTpyes from "prop-types";

import SliderBtn from "./SliderBtn";
import Carousel from "./Carousel";

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

// const Li = styled.li`
//   display: inline-block;
//   position: relative;
//   padding: 0px 8px;
//   cursor: pointer;
//   width: 100%;
//   vertical-align: bottom;
//   @media screen and (min-width: 62em) {
//     width: 50%;
//   }
// `;

const em = parseFloat(
  getComputedStyle(document.querySelector("body"))["font-size"]
);

function SliderComponent({ children, data, screenInfo }) {
  const [isHover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  let screen;
  switch (screenInfo) {
    case "Main":
      screen = window.innerWidth < 62 * em ? 1 : 2;
      break;
    case "Small":
      let currentWindowWidth = window.innerWidth;
      console.log(currentWindowWidth, em * 71);

      if (currentWindowWidth < 56 * em) {
        screen = 4;
      } else if (currentWindowWidth < 62 * em) {
        screen = 5;
      } else if (currentWindowWidth < 71 * em) {
        screen = 6;
      } else {
        screen = 3;
      }
      break;

    // TODO Rank
    case "Rank":
      break;
    default:
      break;
  }
  console.log(data.length, screen);
  let showingArticle = parseInt(data.length / screen);
  console.log(showingArticle);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = (e) => {
    let currDirection = e.currentTarget.getAttribute("direction");

    // 화면에 2개 씩 보일 경우 => showingArticle
    if (currDirection === "prev") {
      if (currentIndex === 0) {
        setCurrentIndex(
          (currentIndex) => (currentIndex = -1 * (showingArticle - 1))
        );
      } else {
        setCurrentIndex((currentIndex) => (currentIndex = currentIndex + 1));
      }
    } else if (currDirection === "next") {
      if (currentIndex === -1 * (showingArticle - 1)) {
        setCurrentIndex((currentIndex) => (currentIndex = 0));
      } else {
        setCurrentIndex((currentIndex) => (currentIndex = currentIndex - 1));
      }
    } else {
      throw Error;
    }
    console.log(currentIndex);
  };

  return (
    <SliderDiv onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SliderBtn direction={"prev"} onClick={onClick} isHover={isHover} />
      <Carousel currentIndex={currentIndex}>
        {children}
        {/* {sliderArticleCellList.map((cell, index) => (
            <Li key={cell.key}>
              <SlideArticleCell
                subtitle={cell.subtitle}
                title={cell.title}
                explanation={cell.explanation}
                thumbnailSrc={cell.thumbnailSrc}
              ></SlideArticleCell>
            </Li>
          ))} */}
      </Carousel>
      <SliderBtn direction={"next"} onClick={onClick} isHover={isHover} />
    </SliderDiv>
  );
}

SliderComponent.propsTypes = {
  children: PropsTpyes.element,
  data: PropsTpyes.array.isRequired,
  screenInfo: PropsTpyes.string.isRequired,
};

export default SliderComponent;
