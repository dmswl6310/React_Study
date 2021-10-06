import { TodoItem } from "../TodoItem";

const TodoList = ( props: {
    todoItemList: Todo[]
    setTodoItemList: any
}) => {
    function onRemove(index: number): void {
        console.log(index, 'deleted call');
        const newTodoItemList = props.todoItemList.filter((todo, idx) => idx !== index);
        props.setTodoItemList(newTodoItemList);
    }

    function onCheck(index: number): void {
        console.log(index, 'checked call');
        const newTodoItemList: Todo[] = props.todoItemList.map((todo, idx) => {
            todo.checked = idx !== index ? todo.checked : !todo.checked;
            return todo;
        });
        props.setTodoItemList(newTodoItemList);
    }

    const onUp = (todo: Todo): void => {
        console.log('up');
        let now: number = 0;

        const todoItemList: Todo[] = props.todoItemList.slice();

        for(let idx = 0; idx < todoItemList.length; idx++) {
            if(todoItemList[idx] === todo) {
                now = idx - 1;
                break;
            }
        }
        if(now === -1) {
            return;
        }

        let temp: Todo = todoItemList[now];
        todoItemList[now] = todoItemList[now + 1];
        todoItemList[now + 1] = temp;
        props.setTodoItemList(todoItemList);
    }

    const onDown = (todo: Todo): void => {
        console.log('down');
        let now: number = 0;

        const todoItemList: Todo[] = props.todoItemList.slice();

        for(let idx = 0; idx < todoItemList.length; idx++) {
            if(todoItemList[idx] === todo) {
                now = idx + 1;
                break;
            }
        }
        if(now === todoItemList.length) {
            return;
        }

        let temp: Todo = todoItemList[now];
        todoItemList[now] = todoItemList[now - 1];
        todoItemList[now - 1] = temp;
        props.setTodoItemList(todoItemList);
    }

    return (
        <div>
            {props.todoItemList.map((todoItem: Todo, idx: number) =>
             <TodoItem
                key={idx}
                text={todoItem.text}
                checked={todoItem.checked}
                onCheck={() => onCheck(idx)}
                onRemove={() => onRemove(idx)}
                onUp={() => onUp(todoItem)}
                onDown={() => onDown(todoItem)}/>)}
        </div>
    );
};

export default TodoList;