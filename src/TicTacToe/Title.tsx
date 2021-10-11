import styled from "styled-components";
import { GiTicTacToe } from "react-icons/gi";
const Title = () => {
  return (
    <TitleText>
      <GiTicTacToe style={{ marginRight: "20px" }} /> Tac Tac Toe
    </TitleText>
  );
};

export default Title;

const TitleText = styled.h1`
  display: flex;
  justify-content: center;
`;
