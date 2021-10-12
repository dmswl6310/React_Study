import styled from "styled-components";
import * as actions from '../actions'
import {useDispatch, useSelector } from 'react-redux';

const Board = () => {

const dispatch=useDispatch();

const handleClick=()=>{
  // const {nextPlayer}=useSelector(state=>({
  //   nextPlayer:state.
  // }))
  dispatch(actions.changePlayer())
}

  return (
    <TableContainer>
      <Table>
        <Row>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
        </Row>
        <Row>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
        </Row>
        <Row>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
          <Data onClick={handleClick} className="content">O</Data>
        </Row>
      </Table>
    </TableContainer>
  );
};

export default Board;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;
const Table = styled.table`
  width: 90%;
`;
const Row = styled.tr`
`;
const Data = styled.td`
  width: 33.33%;
  position: relative;
  &:after {
    content: "";
    display: block;
    margin-top: 100%;
  }
  $:content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: gold;
  }
`;
