import { useRef } from "react";
import styled from "styled-components";

const TodoInput1 = (props: {
  datalist: string[];
  setlist: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const inputElement = useRef<HTMLInputElement>(null);
  // 리스트추가
  const addlist = () => {
    props.setlist([
      ...props.datalist,
      (inputElement.current as HTMLInputElement).value,
    ]);
    // TODO LATER : 타입 체크
    (inputElement.current as HTMLInputElement).value = "";
    (inputElement.current as HTMLInputElement).focus();
  };
  return (
    <TodoInputWrapper>
      <input type="text" ref={inputElement} />
      <button onClick={() => addlist()}> 추가 </button>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  width: 100%;
`;

export default TodoInput1;
