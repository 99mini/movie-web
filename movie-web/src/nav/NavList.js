import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 16px;
  list-style: none;
`;

function NavList({ children }) {
  return <List>{children}</List>;
}

export default NavList;
