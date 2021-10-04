import React from 'react';
import Item from './Item'

const TodoListControl = (props : {
  todoList : Todo[]
  setTodoList : any
}) => {
  

  return (
    <div>
      {props.todoList.map((item:Todo) => <Item id = {item.id} todoText = {item.todoText} done = {item.done}></Item>)}
    </div>
  );
}

export default TodoListControl;