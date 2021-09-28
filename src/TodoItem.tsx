import React from 'react';

export type TodoItemProps = {
    todoItem: {
    id: number;
    text: string;
    done: boolean;
  };
}

function TodoItem({ todoItem }: TodoItemProps) {


  return (
    <li className={`TodoItem ${todoItem.done ? 'done' : ''}`}>
      <span className="text" >{todoItem.text}</span>
      <button className="remove" >-</button>
    </li>
  );
}

export default TodoItem;