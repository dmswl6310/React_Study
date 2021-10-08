import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [todo, setTodo] = useState<todotype>([]);

  return (
    <>
      <h1>React Study TODO List </h1>
      <ToDoInput todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </>
  );
};

export default ToDo;
