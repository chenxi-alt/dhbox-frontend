import Head from 'next/head'
import styled from "styled-components";

import Navigation from "../../../components/forum/Navigation";
import News from "../../../components/forum/News";

const FixedNavigation = styled(Navigation)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`

/**
 * 具体新闻文章页面
 */
const NewsPage = props => {
    return (
        <>
            <Head>
                <title>news</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <FixedNavigation/>
            <News articleId={props.id}/>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    background: #f6f6f6;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>
    )
}

export default NewsPage

export async function getServerSideProps(context) {
    return {
        props: {
            id: context.params.id
        }
    }
}