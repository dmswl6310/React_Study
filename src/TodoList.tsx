import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = [
    {
      id: 1,
      text: 'aaaaaaaaaaaaaaa',
      done: true
    },
    {
      id: 2,
      text: 'bbbbbbbbbbbbbb',
      done: true
    },
    {
      id: 3,
      text: 'cccccccccccccc',
      done: false
    }
  ];
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;