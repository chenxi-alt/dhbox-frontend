import {useState, useEffect} from 'react'
import Head from "next/head";
import styled from "styled-components";

import SlideShow from "../components/forum/SlideShow";
import Navigation from "../components/forum/Navigation";
import PageNavigation from "../components/forum/PageNavigation";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

const App = () => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <title>数字遗产</title>
            </Head>
            <Navigation/>
            <div className={'main-container'}>
                <SlideShow/>
                <PageNavigation/>
            </div>
        </>
    )
}

export default App