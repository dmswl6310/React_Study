import { useRef } from 'react';
import styled from 'styled-components';

const TodoContent = (
    props: {
        text: string,
        checked: boolean,
        onClick: () => void
    }
) => {
    const checked = props.checked;
    const checkRef = useRef<HTMLInputElement>(null);

    return (
        <Wrapper onClick={props.onClick}>
            <input type="checkbox" ref={checkRef} checked={checked} readOnly/>
            <div style={checked ? {display:'inline-block', textDecorationLine: 'line-through'}: {display:'inline-block'}}>{props.text}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid white;
    width: 300px;
    height: 20px;
    background-color: black;
    color: white;
    display:inline-block;
    &:hover {
        background-color: gray;
        color: white;
    }
`;

export default TodoContent;