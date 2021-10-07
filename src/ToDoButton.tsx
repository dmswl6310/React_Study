import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
  background-color: darkgray;
  color: white;
  width: 30px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-style: bold;
  border: 1px solid black;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const ToDoButton = (props: { text: string; ev: any }) => {
  const { text, ev } = props;
  return <ButtonStyle onClick={ev}>{text}</ButtonStyle>;
};
export default ToDoButton;