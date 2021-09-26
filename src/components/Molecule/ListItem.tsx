import { useRef } from "react";
import styled from "styled-components";

const ListItem = (props: {
  item: {
    value: string;
    checked: boolean;
  };
  idx: number;
  remove: (idx: number) => void;
  select: (idx: number) => void;
}) => {
  const deleteBtn = useRef<HTMLDivElement>(null);
  const activeList = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    props.select(props.idx);
  };

  return (
    <ItemWrapper onClick={(e) => activeList(e)}>
      <input
        type="checkbox"
        className="listitem-checkbox"
        checked={props.item.checked}
        readOnly
      ></input>
      <div className="listitem-value">{props.item.value}</div>
      <div
        className="listitem-deletebtn" 
        onClick={(e) => {
        props.remove(props.idx)
        e.stopPropagation();
        }} ref={deleteBtn}>㊀</div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  .listitem-checkbox {
    width : 10vh;
    pointer-events: none;
  }
  .listitem-value {
    display: flex;
    justify-content: left;
    align-items: center;

    width : 30vh;
    height : 40px;
  }
  .listitem-deletebtn {
    display: flex;
    justify-content: center;
    align-items : center;
    color: red;
    width : 10vh;
    height : 100%;
    padding : 0;
    font-weight: bolder;
    :hover {
      cursor: pointer;
      background-color: #7f8fa6;
    }
  }
  :hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;
export default ListItem;
