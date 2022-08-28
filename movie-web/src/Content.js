import styled from "styled-components";
import Home from "./routes/Home";
import ForYou from "./routes/ForYou";
import Search from "./routes/Search";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  width: 100%;
  min-height: 200px;
  background: #fffffe;
  color: #0f0e17;
  border-radius: 8px;
  text-align: center;
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
      break;
  }

  return <Main>Error</Main>;
}

export default Content;
