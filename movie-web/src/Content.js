import styled from "styled-components";
import Home from "./routes/Home";
import ForYou from "./routes/ForYou";
import Search from "./routes/Search";

const Main = styled.main`
  flex: 3;
  background: #000;
`;

function Content() {
  let currentPathname = window.location.pathname;

  switch (currentPathname) {
    case "/":
      return (
        <Main>
          <Home />
        </Main>
      );
    case "/for_you":
      return (
        <Main>
          <ForYou />
        </Main>
      );
    case "/search":
      return (
        <Main>
          <Search />
        </Main>
      );

    default:
      return (
        <Main>
          <Home />
        </Main>
      );
  }
}

export default Content;
