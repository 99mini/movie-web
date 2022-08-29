import React, { useState } from "react";
import styled from "styled-components";

const UlArticle = styled.ul`
  position: relative;
  z-index: 0;
  white-space: nowrap;
  margin: 0px -8px;
`;

function Carousel({ children }) {
  return <UlArticle>{children}</UlArticle>;
}

export default Carousel;
