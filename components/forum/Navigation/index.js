import styled from "styled-components";

import Logo from "./Logo";
import Link from "next/link";
import {Login} from './Login'
import {Message, User} from "./components";
import { useState } from "react";

const Container = styled.div`
    position: relative;
    width: 100%;
    background: white;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 0 2px rgba(0, 0, 0, .1);
    @media (max-width: 600px) {
        height: 50px;
    }
`

const NavContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`

/**
 * 顶部导航
 */
const Navigation = props => {

    const [isLogin, setLogin] = useState(props.isLogin)
    let component = isLogin ? <User/> : <Login/>

    return (
        <Container className={props.className}>
             <NavContainer>
                 <Logo/>
                 {/* <Message/> */}
                 {/* <User/> */}
                 {component}
             </NavContainer>
        </Container>
    )
}

export default Navigation