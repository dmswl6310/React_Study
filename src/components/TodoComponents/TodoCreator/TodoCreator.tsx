import { useRef } from "react";
import { ImageButton } from "../ImageButton";

const TodoCreator = (
    props: {
        todoItemList: Todo[],
        setTodoItemList: any,
        no:number,
        setNo: any,
    }
) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if(inputRef.current) {
            const text: string = inputRef.current.value;
            inputRef.current.focus();
            inputRef.current.value = '';

            const todoItem: Todo = {no: props.no, text, checked: false};
            const newTodoItemList = props.todoItemList.concat(todoItem);
            props.setTodoItemList(newTodoItemList);
            props.setNo(props.no + 1);
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} style={{width: '275px'}} /><ImageButton src={'img_plus.png'} onClick={onClick}/>
        </div>
    );
};

export default TodoCreator;