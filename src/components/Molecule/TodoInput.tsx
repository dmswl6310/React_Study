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
      <input className='todolist-input'
      type="text"
      placeholder="할 일을 입력하세요" 
      ref={inputElement} />
      <div className='todolist-input__btn'
        onClick={() => add((inputElement.current as HTMLInputElement).value)}
      >
        {" "}
        +{" "}
      </div>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  display: flex;
  .todolist-input {
    width : 40vh;
    height: 40px;

    border: none;
    margin : 0;
    padding : 0;
    background-color: #353b48;
    color : white;
    :focus {
      border: none;
      outline: none;
    }
    ::placeholder{
      color: white;
    }
  }
  .todolist-input__btn{
    display: flex;
    justify-content: center;
    align-items: center;

    width : 10vh;
    height: 40px;

    border: none;
    margin: 0;
    background-color: #718093;
    color : white;
    font-size: 20px;
    font-weight: bold;

    :hover {
      cursor: pointer;
    }
  }
`;

export default TodoInput;
