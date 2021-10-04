import React, { useState } from 'react';
import "./App.css"

const TodoInput = (
  props : {
    id : number;
    setId : any;
    todoList : Todo[];
    setTodoList : any;
  }
) => {

    const [text, setText] = useState<string>('');
    const textChange = (e:any) => {
      setText(e.target.value)
    }

    const click = () => {
      const item:Todo = {id : props.id, todoText : text as string, done : false}
      props.setTodoList(props.todoList.concat(item));
      props.setId(props.id+1);
      console.log(item);
    }

  return (
    <form >
      <div className = "App-Title">일정관리</div>
      <input type ="text" onChange={textChange} placeholder="무엇을 하실 건가요?" />
      <button onClick={click} >등록</button>

    </form>
  );
}

export default TodoInput;