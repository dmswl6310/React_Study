import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../stores";
import Board from "../Organism/Board";
import Normal from "../Template/Normal";

const TicTacToe = () => {
  const [isGameFinish, setIsGameFinish] = useState<boolean>(false);
  return (
    <>
      <Normal
        header={<Header />}
        body={
          <Body isGameFinish={isGameFinish} setIsGameFinish={setIsGameFinish} />
        }
        footer={<Footer isGameFinish={isGameFinish} />}
      />
    </>
  );
};

const Header = () => {
  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
    </>
  );
};

const Body = (props: {
  isGameFinish: boolean;
  setIsGameFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Board {...props} />
    </>
  );
};

const Footer = (props: { isGameFinish: boolean }) => {
  const userState = useSelector((state: RootState) => state.user.userState);

  return (
    <Wrapper>
      <div>History</div>
      <div>Next Player : {userState === true ? "O" : "X"}</div>
    </Wrapper>
  );
};
export default TicTacToe;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 322px;
  margin-top: 20px;
`;
