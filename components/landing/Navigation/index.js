import styled from "styled-components";

import Logo from "./Logo";

const Container = styled.div`
    height: 70px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
`

/**
 * logo和左边导航栏的容器
 */
const NavContainer = styled.div`
    height: 100%;
    width: auto;
    float: left;
    display: flex;
`

const UL = styled.ul`
    list-style: none;
    line-height: 70px;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        padding: 0 15px;
    }
`

//登录注册按钮容器
const Button = styled.div`
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    button {
        height: 35px;
        padding: 0 10px;
        z-index: 10;
        cursor: pointer;
        background: #00a7de;
        color: white;
        outline: none;
        border: none;
        border-radius: 5px;
    }
`

/**
 * 网站首页导航
 */
const Navigation = props => {
    return (
        <Container>
            <NavContainer>
                <Logo/>
                <UL>
                    <li>社区</li>
                    <li>遗产管理</li>
                    <li>咨询</li>
                </UL>
            </NavContainer>
            <Button><button>登录 / 注册</button></Button>
        </Container>
    )
}

export default Navigation