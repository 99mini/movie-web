import React from "react";
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
  transform: ${(props) =>
    props.isHover === SelectIndex ? "scale(1.5)" : "none"};
  &: .exit-done {
    will-change: transform, opacity;
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
  return (
    <ArticleHoverItem isHover={isHover}>
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
