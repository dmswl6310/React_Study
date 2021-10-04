import React, { useState } from "react";
import './App.css';

const Item = ( props : Todo) => {

const [done, setDone] = useState(props.done);
const changeDone = () => {
    console.log(props.done)
    setDone (!done);
    console.log(props.done)
}

    return(
        <div onClick={() => setDone(!done)}>
            <input type = "checkbox" onChange = {changeDone}></input>
            <div className={props.done ? 'Checked' : 'Todo'}> {props.todoText}</div>
            <button>-</button>
            <button>up</button>
            <button>down</button>
        </div>
    );
};

export default Item;