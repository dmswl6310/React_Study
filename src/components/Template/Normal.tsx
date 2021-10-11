import { ReactNode } from "react";
import styled from "styled-components";

const Normal = ( props : { header : ReactNode , body : ReactNode, footer: ReactNode}) => {
    return (
        <Wrapper>
            <Header>{props.header}</Header>
            <Body>{props.body}</Body>
            <Footer>{props.footer}</Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
`
const Header = styled.div`
display: flex;
justify-content: center;
`
const Body = styled.div`
display: flex;
justify-content: center;
`
const Footer = styled.div`
display: flex;
justify-content: center;
`
export default Normal;