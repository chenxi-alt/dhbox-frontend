import Head from "next/head";
import styled from "styled-components";
import {useState} from 'react'

import Navigation from "./Navigation";
import PageNavigation from "./PageNavigation";
import {LoginBox} from './LoginBox'
import {NavList} from "./SiderBarNavList";
import {UserInfo} from "./SiderBarUserInfo";

//页面导航，文章列表和个人信息的总容器
const MainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 20px auto 0;
    @media (min-width: 700px) {
        padding: 0 15px;
    }
    overflow: hidden;
`

//页面导航，文章列表的容器
const LeftContainer = styled.div`
    width: 70%;
    float: left;
    background: white;
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    @media (max-width: 600px) {
        width: 100%;
    }
`

const RightContainer = styled.div`
    width: calc(30% - 15px);
    background: white;
    float: right;
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    @media (max-width: 600px) {
        visibility: hidden;
    }
`

const Forum = props => {

    const [isLogin, setLogin] = useState(false)
    let component = isLogin ? <UserInfo/> : <LoginBox setLogin={setLogin}/>

    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <title>数字遗产</title>
            </Head>
            <Navigation/>
            <MainContainer>
                {/*    <SlideShow/>*/}
                <LeftContainer>
                    <PageNavigation select={props.select}/>
                    {props.children}
                </LeftContainer>
                <RightContainer>
                    {/*<LoginBox/>*/}
                    {/*<UserInfo/>*/}
                    {component}
                    <NavList/>
                </RightContainer>
            </MainContainer>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    background: #f6f6f6;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}

export default Forum