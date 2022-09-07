import styled from "styled-components";
import Home from "./routes/Home";
import ForYou from "./routes/ForYou";
import Search from "./routes/Search";
import Evaluate from "./routes/Evaluate";
import Library from "./routes/Library";
import Wacthed from "./routes/Watched";

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
    case "/evaluate":
      return (
        <Main>
          <Evaluate />
        </Main>
      );
    case "/library":
      return (
        <Main>
          <Library />
        </Main>
      );
    case "/watched":
      return (
        <Main>
          <Wacthed />
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
