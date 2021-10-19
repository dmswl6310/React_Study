import { useSelector } from "react-redux";
import styled from "styled-components";

const PlayerContainer = () => {
  const nextPlayer = useSelector(
    (state: { nextPlayer: string }) => state.nextPlayer
  );
  return (
    <>
      <PlayerText>Next Player : {nextPlayer}</PlayerText>
    </>
  );
};

export default PlayerContainer;

const PlayerText = styled.h3``;
