import ListItem from "../Molecule/ListItem";
import TodoInput from "../Molecule/TodoInput";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
// import TodoInput1 from "../Molecule/TodoInput1";

const TodoList = () => {
  const [list, setlist] = useState([
    { value: "1", checked: false },
    { value: "2", checked: false },
    { value: "3", checked: false },
  ]);

  const addList = (text: string) => {
    setlist([...list, { value: text, checked: false }]);
  };

  const remove = (idx: number) => {
    console.log("remove!!");
    const tmpArr = list.slice();
    tmpArr.splice(idx, 1);
    setlist(tmpArr);
  };

  const select = (idx: number) => {
    console.log("select!!");
    const tmpArr = list.slice();
    const tmp = {
      value: list[idx].value,
      checked: !list[idx].checked,
    };
    tmpArr.splice(idx, 1, tmp);
    setlist(tmpArr);
  };
  useEffect(() => {
    console.log("render!");
  }, []);

  return (
    <Wrapper>
      <h5>일정 관리</h5>
      <TodoInput onClick={addList} />
      {/* <TodoInput1 datalist={list} setlist={setlist} /> */}
      {list.map((item, idx) => {
        return (
          <ListItem
            key={idx}
            idx={idx}
            item={item}
            remove={remove}
            select={select}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  margin-left: auto;
  margin-right: auto;
`;

export default TodoList;
