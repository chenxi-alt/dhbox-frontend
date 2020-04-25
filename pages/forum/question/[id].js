import Head from 'next/head'
import axios from 'axios'

import Navigation from "../../../components/forum/Navigation";
import Question from "../../../components/forum/Question/Question";
import Answer from "../../../components/forum/Question/Answer";
import {BottomAnswerInput} from "../../../components/forum/Question/BottomAnswerInput";

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
            <Navigation isLogin={props.isLogin}/>
            <Question topic={props.topic}/>
            <Answer topicId={props.topic.id}/>
            <BottomAnswerInput topicId={props.topic.id}/>
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

export async function getServerSideProps({req, params}) {

    let isLogin = false

    let cookieList = req.headers.cookie.split('; ')
    let token = cookieList.find(s => s.startsWith('Token'))
    if (token !== undefined) {
        token = token.substring(6)
        const res = await axios.get('/api/user/login/status', {
            headers: {
                Token: token
            }
        }).catch(err => {})
        isLogin = res.data.code === 200
    }

    const res = await axios.get('/api/topic/' + params.id)

    return {
        props: {
            topic: res.data,
            isLogin
        }
    }
}