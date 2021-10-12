import styled from "styled-components";

const Tile = (props: {
    data: TileState,
    onClick: any
}) => {
    const state: number = props.data.state;
    const print = (): string => {
        if(state === 0) {
            return 'O';
        } else if(state === 1) {
            return 'X';
        } else {
            return '';
        }
    };

    return (
        <Wrapper color={state} onClick={props.onClick}>
            {print()}
        </Wrapper>
    );
};

const Wrapper = styled.div<{ color: any }>`
    border: 1px solid orange;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    color: ${(props) => (props.color === 1 ? 'red' : 'green')};
`;

export default Tile;