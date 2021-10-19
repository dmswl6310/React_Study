import { useState } from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const TicTacToe = (props: { size: number }) => {
  const [boardState, setBoardState] = useState(
    Array.from(Array(props.size), () => new Array(props.size).fill(""))
  );

  return (
    <Container>
      <Header />
      <Body
        boardState={boardState}
        setBoard={setBoardState}
        size={props.size}
      />
      <Footer />
    </Container>
  );
};

export default TicTacToe;

const Container = styled.div`
display:flex;
flex-direction:column;
justify-center
`;
