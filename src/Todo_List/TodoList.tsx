import { useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import ListElement from "./ListElement";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      data: "일어나기",
      checked: false,
    },
  ]);

  return (
    <Total>
      <Title>TodoList 만들기</Title>
      <ListElement curTodos={todos} handleTodos={setTodos} />
      <InputBox curTodos={todos} handleTodos={setTodos} />
    </Total>
  );
};
export default TodoList;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin:20px
`;

const Title = styled.h2`
text-align: center;
`
