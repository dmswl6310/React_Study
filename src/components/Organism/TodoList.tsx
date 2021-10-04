import ListItem from "../Molecule/ListItem";
import TodoInput from "../Molecule/TodoInput";
import styled from "styled-components";
import { useState } from "react";
import TodoButtons from "../Molecule/TodoButtons";
// import TodoInput1 from "../Molecule/TodoInput1";

const TodoList = () => {
  const [list, setlist] = useState([
    { value: "출근하기", checked: false },
    { value: "일하기", checked: false },
    { value: "퇴근하기", checked: false },
  ]);
  const returnCheckedList = () => {
    // return list.filter((item, idx) => item.checked === true);
    const checkedList: number[] = [];
    // map은 모든 인자에 대한 리턴이 존재해야함.
    // return list.map((item, idx) => {
    //   if (item.checked === true) return idx;
    // });
    list.forEach((item, idx) => {
      if (item.checked === true) {
        checkedList.push(idx);
      }
    });
    return checkedList;
  };
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
    const tmpArr = list.slice();
    const tmp = {
      value: list[idx].value,
      checked: !list[idx].checked,
    };
    tmpArr.splice(idx, 1, tmp);
    setlist(tmpArr);
  };

  const uplist = () => {
    const beforeArr = returnCheckedList();
    if (beforeArr.length === 1) {
      const targetIdx: number = beforeArr[0];
      const tmpVal = list[targetIdx].value;
      const tmpArr = list.slice();
      // 리스트에서 제거
      if (targetIdx !== 0) {
        tmpArr.splice(targetIdx, 1);
        // 리스트에 추가
        tmpArr.splice(targetIdx - 1, 0, { value: tmpVal, checked: true });
        setlist(tmpArr);
      }
    } else {
      alert("한개의 항목만 이동 가능합니다.");
    }
  };

  const downlist = () => {
    const beforeArr = returnCheckedList();
    if (beforeArr.length === 1) {
      const targetIdx: number = beforeArr[0];
      const tmpVal = list[targetIdx].value;
      const tmpArr = list.slice();
      // 리스트에서 제거
      tmpArr.splice(targetIdx, 1);
      // 리스트에 추가
      tmpArr.splice(targetIdx + 1, 0, { value: tmpVal, checked: true });
      setlist(tmpArr);
    } else {
      alert("한개의 항목만 이동 가능합니다.");
    }
  };

  return (
    <Wrapper>
      <div className="todolist-header">일정 관리</div>
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
      <TodoButtons uplist={uplist} downlist={downlist} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  .todolist-header {
    display: flex;
    background-color: #00b894;
    height: 10vh;
    color: white;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
  }
`;

export default TodoList;
