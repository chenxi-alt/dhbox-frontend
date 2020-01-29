import Head from 'next/head'
import Navigation from "../../../components/forum/Navigation";
import Question from "../../../components/forum/Question/Question";
import Answer from "../../../components/forum/Question/Answer";

/**
 * 话题讨论的问题浏览页面
 */
const QuestionPage = props => {
    return (
        <>
            <Head>
                <title>question</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navigation/>
            <Question/>
            <Answer/>
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

export default QuestionPage