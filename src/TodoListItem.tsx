import React, { useState } from 'react';

const TodoListItem = () => {
    

    return(
        <div>
            <input 
            type = "checkbox"
            id = "check"
            />
            <div className = {`TodoItem ${TodoItem.done ? 'done' : ''}`}>할일</div>
        <button>-</button>
        </div>
    );
};

export default TodoListItem;