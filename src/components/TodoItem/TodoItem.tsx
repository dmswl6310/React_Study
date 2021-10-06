import { ImageButton } from "../ImageButton";
import { TodoContent } from "../TodoContent";

const TodoItem = (props: {
    text: string,
    checked: boolean,
    onCheck: () => void,
    onRemove: () => void,
    onUp: () => void,
    onDown: () => void
}) => {

    return (
        <div>
            <TodoContent text={props.text} checked={props.checked} onClick={props.onCheck}/>
            <ImageButton src={'img_minus.png'} onClick={props.onUp}/>
            <ImageButton src={'img_minus.png'} onClick={props.onDown}/>
            <ImageButton src={'img_minus.png'} onClick={props.onRemove}/>
        </div>
    );
};

export default TodoItem;