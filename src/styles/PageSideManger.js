import React from "react";
import styled from "styled-components";

const PageSideMangerStyle = styled.div`
  padding-bottom: 32px;
  padding-right: 40px;
  padding-left: 40px;
  overflow-x: hidden;
`;
function PageSideManger({ children }) {
  return <PageSideMangerStyle>{children}</PageSideMangerStyle>;
}

export default PageSideManger;
