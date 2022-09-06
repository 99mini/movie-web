import styled from "styled-components";
import React from "react";

function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  width: 100%;
  padding: 8px 12px;
  border: 0;
  border-radius: 8px;
  appearance: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 20px;
  background: #303133;
  color: #fff;
  ${(props) =>
    props.isClicked ? "" : "background: #4f2a2a00; color: #d4d7db;"}
`;

function NavLink({ children, to, active }) {
  let currentPath = window.location.pathname;
  let isClicked = currentPath === to;

  return (
    <Link
      href={to}
      active={active}
      aria-current={isCurrent(to) ? "page" : null}
      isClicked={isClicked}
    >
      {children}
    </Link>
  );
}

export default NavLink;
