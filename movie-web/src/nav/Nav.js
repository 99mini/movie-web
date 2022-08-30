import React from "react";
import styled from "styled-components";

const Navigation = styled.section`
  padding: 0 16px;
  margin: 30px 0 0;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;
