import React, { useState } from "react";
import ToDoButton from "./ToDoButton";

const ToDoInput = (props: { todo: todotype; setTodo: any }) => {
  const { todo, setTodo } = props;

  const [inputTodo, setInputTodo] = useState("");
  const [nextId, setNextId] = useState(2);

  const onChange = (e: any) => setInputTodo(e.target.value);
  const onClick = () => {
    if (inputTodo !== "") {
      const nextTodo = todo.concat({
        id: nextId,
        text: inputTodo,
        check: false,
      });
      setNextId(nextId + 1);
      setTodo(nextTodo);
      setInputTodo("");
    }
  };
  const keyPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && inputTodo !== "") {
      const nextTodo = todo.concat({
        id: nextId,
        text: inputTodo,
        check: false,
      });
      setNextId(nextId + 1);
      setTodo(nextTodo);
      setInputTodo("");
    }
  };

  return (
    <div>
      <input
        style={{ display: "inline-block", width: "320px" }}
        value={inputTodo}
        onChange={onChange}
        onKeyPress={keyPressEnter}
      />
      <ToDoButton text="+" ev={onClick}></ToDoButton>
    </div>
  );
};
export default ToDoInput;
