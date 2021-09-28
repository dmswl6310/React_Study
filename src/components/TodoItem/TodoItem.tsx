import { useState } from "react";
import { ImageButton } from "../ImageButton";
import styled from 'styled-components';

const TodoItem = (props: {
    index: number,
    text: string,
    checked: boolean,
    onClick: any,
}) => {
    const [checked, setChecked] = useState(props.checked);
    const handlingChange = () => {
        setChecked(!checked);
    }
    const onClick = () => {
        props.onClick(props.index);
    }

    return (
        <Wrapper onClick={() => setChecked(!checked)}>
            <input type="checkbox" onChange={handlingChange} checked={checked}/>
            <div style={checked ? {display:'inline-block', textDecorationLine: 'line-through'}: {display:'inline-block'}}>{props.text}</div>
            <div style={{display:'inline-block', float: 'right', marginRight: 5}}>
                <ImageButton src={'img_minus.png'} onClick={onClick}/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid white;
    width: 300px;
    height: 20px;
    background-color: black;
    color: white;
    &:hover {
        background-color: gray;
        color: white;
    }
`;

export default TodoItem;