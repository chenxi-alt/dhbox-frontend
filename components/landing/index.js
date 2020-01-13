import Head from "next/head";
import {createGlobalStyle} from "styled-components";

import Navigation from "./Navigation";
import Introduce from "./Introduce";
import Bottom from "./Bottom";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
`

/**
 * 网站首页
 */
const Landing = props => {
    return (
        <>
            <GlobalStyle/>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <title>数字遗产</title>
            </Head>
            <Navigation/>
            <Introduce/>
            <Bottom/>
        </>
    )
}

export default Landing