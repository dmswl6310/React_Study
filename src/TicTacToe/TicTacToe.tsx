import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const TicTacToe = () => {
  const [boardState, setBoardState] = useState([]);
  return (
    <Container>
      <Header />
      <Body />
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
