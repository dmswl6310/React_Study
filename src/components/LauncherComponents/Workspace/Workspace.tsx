import { MainMenu } from "../Menu/MainMenu";
import styled from 'styled-components';
import { HashRouter, Route } from "react-router-dom";
import { Option } from "../pages/Option";
import { Protocol } from "../pages/Protocol";

const Workspace = () => {
    return (
        <Wrapper>
            <MainMenu/>
            <HashRouter>
                <Route exact path="/main/protocol" component={Protocol}/>
                <Route exact path="/main/option" component={Option}/>
            </HashRouter>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export default Workspace;