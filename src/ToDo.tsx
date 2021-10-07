import React, { useState } from "react";
import styled from "styled-components";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [todo, setTodo] = useState<todotype>([]);

  return (
    <>
      <ToDoInput todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo}/>
    </>
  );
};

export default ToDo;
