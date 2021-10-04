import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoListControl from './TodoListControl';

const todos : Todo[] = [
  {
    id: 1,
    todoText: 'aaaaaaaaaaaaaaa',
    done: true
  },
  {
    id: 2,
    todoText: 'bbbbbbbbbbbbbb',
    done: true
  },
  {
    id: 3,
    todoText: 'cccccccccccccc',
    done: false
  }
];

const Form = () => {
  const [todoList, setTodoList] = useState<Todo[]>(todos);
  const [count, setCount] = useState(4);
  return (
   <div>
      <TodoInput id={count} setId = {setCount} todoList = {todoList} setTodoList = {setTodoList}></TodoInput>
      <TodoListControl todoList = {todoList} setTodoList = {setTodoList}></TodoListControl>
   </div>
  );
}

export default Form;