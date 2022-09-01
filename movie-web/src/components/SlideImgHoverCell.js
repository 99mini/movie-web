import React from "react";
import styled from "styled-components";

const ArticleHoverItem = styled.article`
  &: .exit-done {
    will-change: transform, opacity;
  }
`;
function SlideImgHoverCell({ isHover }) {
  return <ArticleHoverItem></ArticleHoverItem>;
}

export default SlideImgHoverCell;
