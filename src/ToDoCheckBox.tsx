const ToDoCheckBox = (props: { value: any; checked: boolean }) => {
  const { value, checked } = props;
  return <input type="checkbox" value={value} checked={checked} readOnly />;
};
export default ToDoCheckBox;
