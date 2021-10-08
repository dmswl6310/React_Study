import styled from "styled-components";
import ToDoButton from "./ToDoButton";
import ToDoCheckBox from "./ToDoCheckBox";

const ListItem = styled.span`
  background-color: skyblue;
  color: blue;
  display: inline-block;
  width: 245px;
  font-size: 1rem;
  border: 1px solid black;
  line-height: 1.5;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
const ListItem2 = styled.span`
  background-color: darkgray;
  color: red;
  display: inline-block;
  width: 245px;
  font-size: 1rem;
  border: 1px solid black;
  line-height: 1.5;
  text-decoration: line-through;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const ToDoList = (props: { todo: todotype; setTodo: any }) => {
  const { todo, setTodo } = props;

  const onRemove = (id: number) => {
    const nextTodo = todo.filter((item) => item.id !== id);
    setTodo(nextTodo);
  };

  const onMoveUp = (id: number) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    let temp: { id: number; text: string; check: boolean } = {
      id: -1,
      text: "",
      check: false,
    };
    for (let arr_v of todo) {
      if (arr_v.id === id) {
        nextTodo.pop();
        nextTodo = [...nextTodo, arr_v];
        if (temp.id !== -1) {
          nextTodo = [...nextTodo, temp];
        }
      } else {
        temp = arr_v;
        nextTodo = [...nextTodo, arr_v];
      }
    }
    setTodo(nextTodo);
  };

  const onMoveDown = (id: number) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    let temp: { id: number; text: string; check: boolean } = {
      id: -1,
      text: "",
      check: false,
    };
    for (let arr_v of todo) {
      if (arr_v.id === id && todo.indexOf(arr_v) !== todo.length - 1) {
        temp = arr_v;
      } else {
        nextTodo = [...nextTodo, arr_v];
        if (temp.id !== -1 && todo.indexOf(arr_v) === todo.indexOf(temp) + 1) {
          nextTodo = [...nextTodo, temp];
        }
      }
    }
    setTodo(nextTodo);
  };

  const onCheck = (id: number) => {
    let nextTodo: {
      id: number;
      text: string;
      check: boolean;
    }[] = [];
    for (let arr_v of todo) {
      if (arr_v.id === Number(id)) {
        arr_v.check = !arr_v.check;
      }
      nextTodo = [...nextTodo, arr_v];
    }
    setTodo(nextTodo);
  };

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <span onClick={() => onCheck(item.id)}>
            <ToDoCheckBox value={item.id} checked={item.check} />
            {item.check ? (
              <ListItem2>{item.text}</ListItem2>
            ) : (
              <ListItem>{item.text}</ListItem>
            )}
          </span>
          <ToDoButton text="-" ev={()=>onRemove(item.id)}></ToDoButton>
          <ToDoButton text="↑" ev={()=>onMoveUp(item.id)}></ToDoButton>
          <ToDoButton text="↓" ev={()=>onMoveDown(item.id)}></ToDoButton>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
