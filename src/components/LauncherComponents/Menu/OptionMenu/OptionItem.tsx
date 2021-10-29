import styled from 'styled-components';

const OptionItem = (props: {
    data: any,
    status: number,
    setStatus: any
}) => {
    const { setStatus } = props;
    const onClick = () => {setStatus(props.data.key)};

    return (
        <Wrapper onClick={onClick}>
            {props.data.title}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 210px;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 16px 16px 24px;
    
    font-family: Noto Sans Display;
    font-size: 16px;
    color: #6A7086;
    font-weight: bold;
    letter-spacing: 0.01em;
    &:hover {
        background-color: #EAF5FF;
        color: #000000;
    }
`;

export default OptionItem;