import styled from "styled-components";

const ListElement = (props: {
  curTodos: {
    data: string;
    checked: boolean;
  }[];
  handleTodos: React.Dispatch<
    React.SetStateAction<
      {
        data: string;
        checked: boolean;
      }[]
    >
  >;
}) => {
  const removeOnClick = (idx: number) => {
    const temp = props.curTodos.filter((v, index) => index !== idx);
    props.handleTodos(temp);
  };

  const upOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx - 1
        ? props.curTodos[idx]
        : index === idx
        ? props.curTodos[idx - 1]
        : value
    );
    props.handleTodos(temp);
  };

  const downOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx
        ? props.curTodos[idx + 1]
        : index === idx + 1
        ? props.curTodos[idx]
        : value
    );
    props.handleTodos(temp);
  };

  const liOnClick = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx ? { ...value, checked: !value.checked } : value
    );
    props.handleTodos(temp);
  };

  const liItems = props.curTodos.map((item, idx) => (
    <TodoItem>
      <TodoText  key={idx} onClick={() => liOnClick(idx)}>
        <input type="checkbox" checked={props.curTodos[idx].checked} readOnly />
        {item.data}
      </TodoText>
      <button onClick={() => removeOnClick(idx)}>-</button>
      <UpDownWrapper>
        <UpDownButton onClick={() => upOnClick(idx)}>∧</UpDownButton>
        <UpDownButton onClick={() => downOnClick(idx)}>∨</UpDownButton>
      </UpDownWrapper>
    </TodoItem>
  ));

  return <ul>{liItems}</ul>;
};
export default ListElement;

const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
`;
const UpDownWrapper=styled.div`
display: flex;
flex-direction: column;
`
const UpDownButton=styled.button`
height:20px;
`
const TodoText=styled.li`
list-style:none;
`