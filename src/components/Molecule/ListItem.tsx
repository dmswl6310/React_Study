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
  const activeList = () => {
    props.select(props.idx);
  };

  return (
    <ItemWrapper onClick={activeList}>
      <input
        type="checkbox"
        className="listitem-checkbox"
        checked={props.item.checked}
        readOnly
      ></input>
      {props.item.value}
      <button onClick={() => props.remove(props.idx)}>㊀</button>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 100%;
  .listitem-checkbox {
    pointer-events: none;
  }
  :hover {
    background-color: whitesmoke;
  }
`;
export default ListItem;
