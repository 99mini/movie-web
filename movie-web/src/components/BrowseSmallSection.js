import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

import SectionTitleBar from "./SectionTitleBar";
import SliderComponent from "./SliderComponent";

import mainContentMembers from "../assets/json/mainContentMembers.json";
import SlideImgCell from "./SlideImgCell";
import SlideImgHoverCell from "./SlideImgHoverCell";

const SelectIndex = {
  DEFAULT: 0,
  LEFT: 1,
  SELECTED: 2,
  RIGHT: 3,
};

const BrowseSection = styled.section`
  margin-bottom: 32px;
`;

const CssTransLeft = css`
  @media screen and (min-width: 56em) {
    transform: translate3d(-20%, 0px, 0px);
  }
  @media screen and (min-width: 62em) {
    transform: translate3d(-15%, 0px, 0px);
  }
  @media screen and (min-width: 71em) {
    transform: translate3d(-10%, 0px, 0px);
  }
`;
const CssTransRight = css`
  @media screen and (min-width: 56em) {
    transform: translate3d(20%, 0px, 0px);
  }
  @media screen and (min-width: 62em) {
    transform: translate3d(15%, 0px, 0px);
  }
  @media screen and (min-width: 71em) {
    transform: translate3d(10%, 0px, 0px);
  }
`;
const CssTransSelected = css`
  @media screen and (min-width: 56em) {
    transform: translate3d(0%, 0px, 0px);
  }
  @media screen and (min-width: 62em) {
    transform: translate3d(5%, 0px, 0px);
  }
  @media screen and (min-width: 71em) {
    transform: translate3d(0%, 0px, 0px);
  }
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 0px 6px;
  cursor: pointer;
  width: 33.3333%;
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;

  @media screen and (min-width: 56em) {
    width: 25%;
  }
  @media screen and (min-width: 62em) {
    width: 20%;
  }
  @media screen and (min-width: 71em) {
    width: 16%;
  }

  ${(props) => {
    if (props.isHover) {
      switch (props.isHoverList) {
        case SelectIndex.LEFT:
          return CssTransLeft;
        case SelectIndex.RIGHT:
          return CssTransRight;
        case SelectIndex.SELECTED:
          return CssTransSelected;
        default:
          break;
      }
    } else if (!props.isHover) {
      switch (props.isHoverList) {
        case SelectIndex.LEFT:
          return CssTransRight;
        case SelectIndex.RIGHT:
          return CssTransLeft;
        case SelectIndex.SELECTED:
          return CssTransSelected;
        default:
          break;
      }
    }
  }}
`;

// TODO
// Hover를 기준으로 왼쪽은 -x % 이동 오른쪽은 + x % 이동
// Hover 된 엘리먼트는 0%

function BrowseSmallSection() {
  const [sliderArticleCellList, setSliderArticleCellList] = useState([]);
  const [isHoverList, setIsHoverList] = useState();
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = (e, index) => {
    let prevState = [...isHoverList];
    for (let i = 0; i < prevState.length; i++) {
      if (index === i) prevState[i] = SelectIndex.SELECTED;
      else if (index > i) prevState[i] = SelectIndex.LEFT;
      else prevState[i] = SelectIndex.RIGHT;
    }
    setIsHover((isHover) => (isHover = true));
    setIsHoverList(prevState);
  };

  const onMouseLeave = (e, index) => {
    setIsHover((isHover) => (isHover = false));
    setIsHoverList(
      (isHoverList) => (isHoverList = isHoverList.fill(SelectIndex.DEFAULT))
    );
  };

  useEffect(() => {
    let members = mainContentMembers.members;
    members = Object.values(members);
    setSliderArticleCellList(members);

    setIsHoverList(
      (isHoverList) =>
        (isHoverList = new Array(members.length).fill(SelectIndex.DEFAULT))
    );
  }, []);

  console.log(isHoverList);
  console.log(isHover);

  return (
    <BrowseSection>
      <SectionTitleBar title={"새로운 에피소드"} isShowMoreBtn={true} />
      <SliderComponent data={sliderArticleCellList}>
        {sliderArticleCellList.map((cell, index) => (
          <Li
            id={index}
            key={cell.key}
            isHover={isHover}
            isHoverList={isHoverList[index]}
            onMouseEnter={(e) => onMouseEnter(e, index)}
            onMouseLeave={(e) => onMouseLeave(e, index)}
          >
            <SlideImgCell imgSrc={cell.thumbnailSrc}></SlideImgCell>
            <SlideImgHoverCell></SlideImgHoverCell>
          </Li>
        ))}
      </SliderComponent>
    </BrowseSection>
  );
}

export default BrowseSmallSection;
