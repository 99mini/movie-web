import React from "react";
import Nav from "../nav/index";

import styled from "styled-components";

import { ReactComponent as WatchaLogo } from "../assets/svg/WatchaLogo.svg";

import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";

const SideNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 501;
  background: #141517;
  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
`;

const IconSpan = styled.span`
  position: relative;
  padding-right: 8px;
  bottom: -2px;
`;

const Logo = styled.a`
  display: block;
  margin: 24px 0 0 26px;
`;

function SideNav() {
  const isActive = (path) => {
    return window.location.pathname.startsWith(path);
  };

  return (
    <SideNavBar>
      <Logo href="/" active={isActive("/")}>
        <WatchaLogo width="88px" height="26px" />
      </Logo>
      <Nav>
        <Nav.List>
          <Nav.Item>
            <Nav.Link to="/" active={isActive("/")}>
              <IconSpan>
                <HiIcons.HiOutlineHome />
              </IconSpan>
              홈
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/for_you" active={isActive("/for_you")}>
              <IconSpan>
                <MdIcons.MdOutlineVideoLibrary />
              </IconSpan>
              발견
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/search" active={isActive("/search")}>
              <IconSpan>
                <MdIcons.MdSearch />
              </IconSpan>
              찾기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/evaluate" active={isActive("/evaluate")}>
              <IconSpan>
                <HiIcons.HiOutlineStar />
              </IconSpan>
              평가하기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/library" active={isActive("/library")}>
              <IconSpan>
                <MdIcons.MdOutlineTableRows />
              </IconSpan>
              보관함
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/watched" active={isActive("/watched")}>
              <IconSpan>
                <MdIcons.MdOutlineCheckBox />
              </IconSpan>
              다 본 컨텐츠
            </Nav.Link>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </SideNavBar>
  );
}

export default SideNav;
