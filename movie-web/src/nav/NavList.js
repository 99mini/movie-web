import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 20px;
  list-style: none;
`;

function NavList({ children }) {
  return <List>{children}</List>;
}

export default NavList;
