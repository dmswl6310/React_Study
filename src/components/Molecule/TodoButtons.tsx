import styled from "styled-components";

const TodoButtons = (props: { uplist: any; downlist: any }) => {
  return (
    <ButtonsWrapper>
      <button className="control-buttons" onClick={() => props.uplist()}>
        {" "}
        ▲{" "}
      </button>
      <button className="control-buttons" onClick={() => props.downlist()}>
        {" "}
        ▼{" "}
      </button>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  .control-buttons {
    width: 100%;
    height: 40px;
    background-color: #353b48;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;
export default TodoButtons;
