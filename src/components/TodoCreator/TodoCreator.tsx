import { useState } from "react";
import { ImageButton } from "../ImageButton";

const TodoCreator = (
    props: {
        index: number,
        todoItemList: Todo[],
        setIndex: any,
        setTodoItemList: any
    }
) => {
    const [text, setText] = useState<string>('');

    const onClick = () => {
        const todoItem: Todo = {index: props.index + 1, text: text, checked: false};
        const newTodoItemList = props.todoItemList.concat(todoItem);
        props.setTodoItemList(newTodoItemList);
        props.setIndex(props.index + 1);
    }
    const handlingChange = (e: any) => {
        setText(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handlingChange} style={{width: '275px'}} /><ImageButton src={'img_plus.png'} onClick={onClick}/>
        </div>
    );
};

export default TodoCreator;