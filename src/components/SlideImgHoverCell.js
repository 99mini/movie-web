import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropsType from "prop-types";

import DivSmallImgWrapper from "./DivSmallImgWrapper";
import { SelectIndex } from "../constants/Constants";

const ArticleHoverItem = styled.article`
  visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
  transition-delay: 0s;
  top: -10%;
  left: calc(-10% + 7.2px);
  transform: scale(0.83);
  width: calc((100% - 12px) * 1.2);
  height: 120%;

  &.exit-done,
  &.exit-active,
  &.enter-active,
  &.enter-done,
  &.enter {
    will-change: transform, opacity;
  }

  &.enter,
  &.enter-done,
  &.exit {
    z-index: 4;
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }

  // TODO exit animation
  &.exit {
  }
  &.exit-done {
  }

  // TODO exit active animation
  &.exit-active {
  }

  // TODO enter active animation
  &.enter-active {
  }
  // TODO enter done animation
  &.enter-done {
  }
  // TODO enter animation
  $.enter {
  }
`;

const DivHoverImgWrapper = styled.div`
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
}`;

const DivOpacityChanger = styled.div`
  position: absolute;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;

const DivVideoInfo = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 4;
  width: 100%;
`;

const DivHoverWrapper = styled.div`
  position: relative;
`;

function SlideImgHoverCell({ isHover, imgSrc }) {
  let hoverAnimations = {
    exit: "exit",
    exitActive: "exit-active",
    exitDone: "exit-done",
    enter: "enter",
    enterActive: "enter-active",
    enterDone: "enter-done",
  };
  const [animation, setAnimation] = useState("");

  // TODO
  // 호버가 되면 enter -> enterActive -> enterDone 순으로 변경
  // 호버가 풀리면 exit -> exitActive -> exitDone 순으로 변경
  // state 사용하여 반응형 만들기
  useEffect(() => {
    if (isHover === SelectIndex.SELECTED) {
      setAnimation(hoverAnimations.enterDone);
    } else {
      setAnimation(hoverAnimations.exitDone);
    }
  }, [isHover]);
  return (
    <ArticleHoverItem isHover={isHover} className={animation}>
      <DivHoverImgWrapper>
        <DivOpacityChanger></DivOpacityChanger>
        <DivVideoInfo></DivVideoInfo>
        <DivHoverWrapper>
          <DivSmallImgWrapper
            isHover={isHover}
            imgSrc={imgSrc}
          ></DivSmallImgWrapper>
        </DivHoverWrapper>
      </DivHoverImgWrapper>
    </ArticleHoverItem>
  );
}

SlideImgHoverCell.propstype = {
  isHover: PropsType.number.isRequired,
};

export default SlideImgHoverCell;
