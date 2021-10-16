import { ReactNode } from "react";
import styled from 'styled-components';

const MainContainer = (
    props: {
        header: ReactNode,
        body: ReactNode,
        footer: ReactNode
    }
) => {
    return (
        <div>
            <Header>{props.header}</Header>
            <Body>{props.body}</Body>
            <Footer>{props.footer}</Footer>
        </div>
    );
};

const Header = styled.div`
`;
const Body = styled.div`
`;
const Footer = styled.div`
`;

export default MainContainer;