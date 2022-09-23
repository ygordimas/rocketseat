import styled from "styled-components";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: teal;
`;
export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Title>Hello World</Title>
    </div>
  );
}
