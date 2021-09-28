import React from 'react';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

function TodoItem({ todo }: TodoItemProps) {


  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" >{todo.text}</span>
      <button className="remove" >-</button>
    </li>
  );
}

export default TodoItem;