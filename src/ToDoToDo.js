import React, { useState } from 'react';
const ToDoToDo = () => {
    const [todo,setTodo] = useState([{id:1,text:'할일'}]);
    const [inputTodo,setInputTodo] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChange = e => setInputTodo(e.target.value);
    const onClick = () => {
        const nextTodo = todo.concat({
            id: nextId,
            text : inputTodo
        });
        setNextId(nextId+1);
        setTodo(nextTodo);
        setInputTodo('');
    }
    const onRemove = id => {
        const nextTodo = todo.filter(item => item.id !== id);
        setTodo(nextTodo);
    }

    const todoList = todo.map( item => (
        <div key={item.id}>
            <TodoItem props={item} onRemove={onRemove}/>
            {/* <input type='checkbox'/>=
            {item.text}
            <button onClick={()=>onRemove(item.id)}>-</button> */}
        </div>
        )
    )

    return (
        <>
        <input value={inputTodo} onChange={onChange}/>
        <button onClick={onClick}>+</button>
          {todoList}
        </>
    );
};

export default ToDoToDo;