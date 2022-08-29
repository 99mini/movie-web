import styled from "styled-components";
import React from "react";

function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 20px;
  border-radius: 4px;
  color: #e8e8e8;
  text-decoration: none;

  &:not([href]) {
    color: #303133;
    background: revert;
    transform: none;
  }
`;

function NavLink({ children, to, active }) {
  return (
    <Link
      href={to}
      active={active}
      aria-current={isCurrent(to) ? "page" : null}
    >
      {children}
    </Link>
  );
}

export default NavLink;
