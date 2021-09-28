import React from 'react';

const TodoItem = ({props, onRemove}) => {
    const {id,text} = props;
    // console.log(props.text);
    return (
        <div>
            <input type='checkbox'/>
            {text}
            <button onClick={()=>onRemove(id)}>-</button>
        </div>
    );
};


export default TodoItem;