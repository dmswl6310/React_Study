const ListItem = (props: { name: string }) => {
  return (
    <div>
      <input type="checkbox"></input>
      {props.name}
      <button>㊀</button>
    </div>
  );
};

export default ListItem;
