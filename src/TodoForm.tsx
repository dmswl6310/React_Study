import React, { useState } from 'react';
import "./App.css"

function TodoForm() {


  return (
    <form >
      <div className = "App-Title">일정관리</div>
      <input placeholder="무엇을 하실 건가요?"/>
      <button>등록</button>
    </form>
  );
}

export default TodoForm;