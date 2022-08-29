import React, { useState } from "react";
import styled from "styled-components";

const UlArticle = styled.ul`
  position: relative;
  z-index: 0;
  white-space: nowrap;
  margin: 0px -8px;
  transform: translateX(${(props) => props.currentIndex * 100}%);
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;

function Carousel({ children, currentIndex }) {
  return <UlArticle currentIndex={currentIndex}>{children}</UlArticle>;
}

export default Carousel;
