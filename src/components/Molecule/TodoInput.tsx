import { useRef } from "react";
import styled from "styled-components";

const TodoInput = (props: { onClick: (text: string) => void }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  // 리스트추가
  const add = (text: string) => {
    props.onClick(text);
    // TODO LATER : 타입 체크
    (inputElement.current as HTMLInputElement).value = "";
    (inputElement.current as HTMLInputElement).focus();
  };
  return (
    <TodoInputWrapper>
      <input type="text" ref={inputElement} />
      <button
        onClick={() => add((inputElement.current as HTMLInputElement).value)}
      >
        {" "}
        추가{" "}
      </button>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  width: 100%;
`;

export default TodoInput;
