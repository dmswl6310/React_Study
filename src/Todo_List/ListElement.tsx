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
  const itemOnClick = (idx: number) => {
    const temp = props.curTodos.filter((v, index) => index !== idx);
    props.handleTodos(temp);
  };
  const handleCheckbox = (idx: number) => {
    const temp = props.curTodos.map((value, index) =>
      index === idx ? { ...value, checked: !value.checked } : value
    );
    props.handleTodos(temp);
  };

  const liItems = props.curTodos.map((item, idx) => (
    <li key={idx}>
      <input
        type="checkbox"
        checked={props.curTodos[idx].checked}
        onChange={() => handleCheckbox(idx)}
      />
      {item.data}
      <button onClick={() => itemOnClick(idx)}>-</button>
    </li>
  ));
  return <ul>{liItems}</ul>;
};
export default ListElement;
