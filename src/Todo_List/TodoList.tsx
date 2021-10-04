import { useState, useRef } from "react";
import ListElement from "./ListElement";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      data: "일어나기",
      checked: false,
    },
  ]);

  const inputRef = useRef<any>(null);

  const handleClick = () => {
    setTodos([...todos, { data: inputRef.current.value, checked: false }]);
    inputRef.current.value = null;
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setTodos([...todos, { data: e.target.value, checked: false }]);
      e.target.value = null;
    }
  };

  return (
    <>
      <h1>TodoList 만들기</h1>
      <ListElement curTodos={todos} handleTodos={setTodos} />
      <input
        type="text"
        ref={inputRef}
        onKeyPress={onKeyPress}
        placeholder="할일 입력"
      ></input>
      <button onClick={handleClick}>입력</button>
    </>
  );
};
export default TodoList;
