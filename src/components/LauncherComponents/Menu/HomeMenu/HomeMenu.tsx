import { useHistory } from 'react-router';
import styled from 'styled-components';

const HomeMenu = () => {
    const history = useHistory();

    return (
        <Wrapper>
            <Logo>Logo Image</Logo>
            <Button onClick={() => {alert('Maintenance 클릭')}} color={'skyblue'}>Maintenance</Button>
            <Button onClick={() => {alert('Move Gantry 클릭')}} color={'green'}>Move Gantry</Button>
            <Button onClick={() => {alert('UV Scan 클릭')}} color={'purple'}>UV Scan</Button>
            <Button onClick={() => {history.push('/main/protocol')}} color={'darkred'}>Launcher Run</Button>
        </Wrapper>
    );
};

const Logo = styled.div`
    height: 35rem;
    background-color: gray;
`;

const Button = styled.div<{color?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: white;
    background-color: ${(props) => props.color};
    &:hover {
        background-color: red;
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 20vw;
    justify-content: flex-end;
    flex-direction: column;
    background-color: black;
`;

export default HomeMenu;