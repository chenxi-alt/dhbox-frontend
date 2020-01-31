import Head from 'next/head'

import Navigation from "../../../components/forum/Navigation";
import News from "../../../components/forum/News";

/**
 * 具体新闻文章页面
 */
const NewsPage = props => {
    return (
        <>
            <Head>
                <title>news</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <link rel="stylesheet" href="/quill.core.css"/>
            </Head>
            <Navigation/>
            <News/>
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