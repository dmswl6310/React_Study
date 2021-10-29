import { useHistory } from "react-router";
import styled from "styled-components";

const MainMenu = () => {
    const history = useHistory();
    
    return (
        <Wrapper>
            <Logo>Logo 영역</Logo>
            <Label>장비명</Label>
            <Label>유저명</Label>
            <Table>
                <tbody>
                    <tr>
                        <Button onClick={() => {history.push('/')}}>Home</Button>
                        <Button onClick={() => {history.push('/main/protocol')}}>Protocol</Button>
                    </tr>
                    <tr><Button colSpan={2} onClick={() => {alert('Maintenance 클릭')}}>Maintenance</Button></tr>
                    <tr><Button colSpan={2} onClick={() => {alert('Move Gantry 클릭')}}>Move Gantry</Button></tr>
                    <tr><Button colSpan={2} onClick={() => {alert('UV Scan 클릭')}}>UV Scan</Button></tr>
                    <tr><Button colSpan={2} onClick={() => {history.push('/main/option')}}>Option</Button></tr>
                </tbody>
            </Table>
        </Wrapper>
    );
};

const Table = styled.table`
    width: 200px;
`;

const Logo = styled.div`
    height: 120px;
    border: 1px solid white;
`;

const Label = styled.div`
    height: 40px;
    border: 1px solid white;
`;

const Button = styled.td`
    height: 60px;
    background-color: darkblue;
    &:hover {
        background-color: red;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 200px;
    background-color: skyblue;
    color: white;
`;

export default MainMenu;