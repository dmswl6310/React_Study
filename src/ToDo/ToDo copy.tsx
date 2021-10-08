import React, { useState } from "react";
import styled from "styled-components";

const ListItem = styled.span`
  background-color: skyblue;
`;
const ListItem2 = styled.span`
  background-color: lightgray;
  text-decoration: line-through;
`;

const ToDo = () => {
  const [todo, setTodo] = useState([{ id: 1, text: "할일", check: false }]);
  const [inputTodo, setInputTodo] = useState("");
  const [nextId, setNextId] = useState(2);

  const onChange = (e: any) => setInputTodo(e.target.value);
  const onClick = () => {
    const nextTodo = todo.concat({
      id: nextId,
      text: inputTodo,
      check: false,
    });
    setNextId(nextId + 1);
    setTodo(nextTodo);
    setInputTodo("");
  };
  const onRemove = (id: number) => {
    const nextTodo = todo.filter((item) => item.id !== id);
    setTodo(nextTodo);
  };
  const onMoveUp = (id: number) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    let temp: { id: number; text: string; check: boolean } = {
      id: -1,
      text: "",
      check: false,
    };
    for (let arr_v of todo) {
      console.log(todo.indexOf(arr_v));
      if (arr_v.id === id) {
        nextTodo.pop();
        nextTodo = [...nextTodo, arr_v];
        if (temp.id !== -1) {
          nextTodo = [...nextTodo, temp];
        }
      } else {
        temp = arr_v;
        nextTodo = [...nextTodo, arr_v];
      }
    }
    setTodo(nextTodo);
  };
  const onMoveDown = (id: number) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    let temp: { id: number; text: string; check: boolean } = {
      id: -1,
      text: "",
      check: false,
    };
    for (let arr_v of todo) {
      if (arr_v.id === id && todo.indexOf(arr_v) !== todo.length - 1) {
        temp = arr_v;
      } else {
        nextTodo = [...nextTodo, arr_v];
        if (temp.id !== -1 && todo.indexOf(arr_v) === todo.indexOf(temp) + 1) {
          nextTodo = [...nextTodo, temp];
        }
      }
    }
    setTodo(nextTodo);
  };
  const onCheck = (e: any) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    for (let arr_v of todo) {
      if (arr_v.id == e.target.value) {
        arr_v.check = e.target.checked;
      }
      nextTodo = [...nextTodo, arr_v];
    }
    setTodo(nextTodo);
  };
  const todoList = todo.map((item) => (
    <div key={item.id}>
      <input
        type="checkbox"
        value={item.id}
        checked={item.check}
        onChange={onCheck}
      />
      {item.check ? (
        <ListItem2>{item.text}</ListItem2>
      ) : (
        <ListItem>{item.text}</ListItem>
      )}
      <button onClick={() => onRemove(item.id)}>-</button>
      <button onClick={() => onMoveUp(item.id)}>↑</button>
      <button onClick={() => onMoveDown(item.id)}>↓</button>
    </div>
  ));

  return (
    <>
      <input value={inputTodo} onChange={onChange} />
      <button onClick={onClick}>+</button>
      {todoList}
    </>
  );
};

export default ToDo;
