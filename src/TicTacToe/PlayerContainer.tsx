import { useSelector } from "react-redux";
import styled from "styled-components";

const PlayerContainer = () => {
  const nextPlayer = useSelector(
    (state: { nextPlayer: string }) => state.nextPlayer
  );
  return (
    <TextContainer>
      <PlayerText>Next Player : {nextPlayer}</PlayerText>
    </TextContainer>
  );
};

export default PlayerContainer;

const PlayerText = styled.h3``;
const TextContainer = styled.div`
  margin-left: 20px;
`;
