import styled from 'styled-components';

const HistoryItem = (
    props: {
        text: string
        onClick: any;
    }
) => {
    return (
        <Wrapper onClick={props.onClick}>
            {props.text}
        </Wrapper>
    );
}

const Wrapper = styled.div`

`;

export default HistoryItem;