import { TodoItem } from "../TodoItem";

const TodoList = ( props: {
    todoItemList: Todo[]
    setTodoItemList: any
}) => {
    function onClick(index: number): any {
        console.log(index, 'deleted');
        const newTodoItemList: Todo[] = props.todoItemList.filter((todo) => todo.index !== index);
        props.setTodoItemList(newTodoItemList);
    }

    return (
        <div>
            {props.todoItemList.map((todoItem: Todo) => <TodoItem key={todoItem.index} index={todoItem.index} text={todoItem.text} checked={todoItem.checked} onClick={onClick}/>)}
        </div>
    );
};

export default TodoList;