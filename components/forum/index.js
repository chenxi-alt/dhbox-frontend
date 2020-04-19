import Head from "next/head";
import styled from "styled-components";
import {useState} from 'react'

import Navigation from "./Navigation";
import PageNavigation from "./PageNavigation";
import {LoginBox} from './LoginBox'
import SlideShow from "./SlideShow";
import {NavList} from "./SiderBarNavList";
import {UserInfo} from "./SiderBarUserInfo";
import {QuestionInputModal} from "./QuestionInputModal";

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
    @media (max-width: 600px) {
        width: 100%;
    }
`
const ListContainer = styled.div`
    width: 100%;
    background: white;
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
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


    // 话题输入框
    const [visible, setVisible] = useState(false)

    const [isLogin, setLogin] = useState(props.isLogin)
    let component = isLogin ? <UserInfo onClick={() => setVisible(true)}/> : <LoginBox/>

    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <title>数字遗产</title>
            </Head>
            <Navigation isLogin={isLogin}/>
            <MainContainer>
                <LeftContainer>
                    <SlideShow/>
                    <ListContainer>
                        <PageNavigation select={props.select}/>
                        {props.children}
                    </ListContainer>
                </LeftContainer>
                <RightContainer>
                    {/*<LoginBox/>*/}
                    {/*<UserInfo/>*/}
                    {component}
                    <NavList/>
                </RightContainer>
            </MainContainer>
            <QuestionInputModal visible={visible} onCancel={() => setVisible(false)}/>
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