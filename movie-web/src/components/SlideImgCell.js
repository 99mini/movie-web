import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

import DivSmallImgWrapper from "./DivSmallImgWrapper";

const ArticleItem = styled.article`
  display: block;
`;

const AItem = styled.a`
  display: block;
`;

function SlideImgCell({ imgSrc, title, limit, runningTime, tags, isHover }) {
  return (
    <ArticleItem>
      <AItem>
        <DivSmallImgWrapper imgSrc={imgSrc}></DivSmallImgWrapper>
      </AItem>
    </ArticleItem>
  );
}

SlideImgCell.propTypes = {
  imgSrc: PropsType.string.isRequired,
};

export default SlideImgCell;
