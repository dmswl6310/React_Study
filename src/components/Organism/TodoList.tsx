import ListItem from "../Molecule/ListItem";
import TodoInput from "../Molecule/TodoInput";
import styled from "styled-components";

const TodoList = () => {
  let list = ["1", "2", "3"];
  return (
    <Wrapper>
      <h5>일정 관리</h5>
      <TodoInput />
      {list.map((items, idx) => {
        return <ListItem name={items} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TodoList;
