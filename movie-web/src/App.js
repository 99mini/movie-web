import styled, { createGlobalStyle } from "styled-components";

import SideNav from "./components/SideNav";
import Content from "./Content";

import TopNav from "./components/TopNav";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  *,::before, ::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    background-color: #000000;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
  }

  hr{
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
  }
`;

const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e8e8e8;
  font-size: 1.5rem;
  font-family: sans-serif;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
`;

function App() {
  return (
    <NavLayout>
      <GlobalStyle />
      <TopNav />
      <SideNav />
      <Content />
    </NavLayout>
  );
}

export default App;
