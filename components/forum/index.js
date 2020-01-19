import Head from "next/head";
import styled from "styled-components";

import Navigation from "./Navigation";
import PageNavigation from "./PageNavigation";

//页面导航，文章列表和个人信息的总容器
const MainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 20px auto 0;
    @media (min-width: 600px) {
        padding: 0 24px;
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

const RightContainer = styled.div`
    width: calc(30% - 30px);
    background: white;
    height: 150px;
    float: right;
    @media (max-width: 600px) {
        visibility: hidden;
    }
`

const Forum = props => {
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
                <RightContainer/>
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