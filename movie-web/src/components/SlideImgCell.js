import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

const ArticleItem = styled.article`
  display: block;
`;

const AItem = styled.a`
  display: block;
`;

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

function SlideImgCell({ imgSrc, title, limit, runningTime, tags }) {
  return (
    <ArticleItem>
      <AItem>
        <DivItem>
          <DivImgWrapper>
            <ImgItem src={imgSrc}></ImgItem>
          </DivImgWrapper>
        </DivItem>
      </AItem>
    </ArticleItem>
  );
}

SlideImgCell.propTypes = {
  imgSrc: PropsType.string.isRequired,
};

export default SlideImgCell;
