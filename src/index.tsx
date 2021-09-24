import React from "react";
import ReactDOM from "react-dom";
import TodoListForm from './TodoListForm';
import TodoListItem from './TodoListItem';

ReactDOM.render(
  <React.StrictMode>
    <TodoListForm />
    <TodoListItem/>
    <TodoListItem/>
    <TodoListItem/>
  </React.StrictMode>,
  document.getElementById("root")
);
