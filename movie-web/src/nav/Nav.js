import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  min-width: 240px;
  width: 240px;
  height: 100vh;
  background-color: #141517;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;
