import React, { useState } from 'react';
import "./App.css"

function TodoForm() {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 새 항목 생성하기
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className = "App-Title">일정관리</div>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;