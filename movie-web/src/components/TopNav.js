import React from "react";
import styled from "styled-components";

import Profile from "../assets/images/Profile01.jpg";

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  padding-left: 240px;
  z-index: 500;
  width: 100vw;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 12px 40px;
  background: #141517;
  transition: background-color 300ms;
`;

const Figure = styled.figure`
  position: fixed;
  right: 32px;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 100%;
  margin: 0;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

function TopNav() {
  return (
    <Header>
      <Nav>
        <Figure>
          <Img src={Profile} />
        </Figure>
      </Nav>
    </Header>
  );
}

export default TopNav;
