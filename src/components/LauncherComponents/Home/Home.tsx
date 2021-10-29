import styled from 'styled-components'
import { HomeMenu } from '../Menu/HomeMenu';

const Home = () => {
    return (
        <Wrapper>
            <Main>Launcher 메인 Image</Main>
            <HomeMenu/>
        </Wrapper>
    );
};

const Main = styled.div`
    width: 80vw;
    background-color: blue;
`;

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
`;

export default Home;