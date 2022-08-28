import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";

import SideNav from "./components/SideNav";
import Content from "./Content";

import Home from "./routes/Home";
import ForYou from "./routes/ForYou";
import Search from "./routes/Search";
import TopNav from "./components/TopNav";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #141517;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <TopNav />
        <SideNav />
        <Content />
      </Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for_you" element={<ForYou />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
