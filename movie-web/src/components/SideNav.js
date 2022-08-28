import React from "react";
import Nav from "../nav/index";
import { ReactComponent as WatchaLogo } from "../assets/svg/WatchaLogo.svg";

import * as FaIcons from "react-icons/fa";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/" active={isActive("/")}>
            <WatchaLogo width="88px" height="26px" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/" active={isActive("/")}>
            <FaIcons.FaHome />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/for_you" active={isActive("/for_you")}>
            <FaIcons.FaVideo />
            Find
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/search" active={isActive("/search")}>
            <FaIcons.FaSearch />
            Search
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav;
