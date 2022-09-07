import React from "react";
import styled from "styled-components";

const Item = styled.li`
  align-self: stretch;
  list-style: none;
  padding: 0;
  margin: 0;
`;

function NavItem({ children }) {
  return <Item>{children}</Item>;
}

export default NavItem;
