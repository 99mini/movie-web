import React from "react";
import styled from "styled-components";
import { SelectIndex } from "../constants/Constants";

const DivItem = styled.div`
  position: relative;
  white-space: pre-wrap;
`;

const DivImgWrapper = styled.div`
  position: relative;
  padding-top: 147.3%;
  border-radius: 4px;
  overflow: hidden;
`;

const ImgItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function DivSmallImgWrapper({ imgSrc, isHover = SelectIndex.DEFAULT }) {
  return (
    <DivItem isHover={isHover}>
      <DivImgWrapper>
        <ImgItem src={imgSrc}></ImgItem>
      </DivImgWrapper>
    </DivItem>
  );
}

export default DivSmallImgWrapper;
