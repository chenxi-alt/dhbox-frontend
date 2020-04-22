import {useState, useEffect} from 'react'
import axios from 'axios'

import Forum from "../components/forum";
import Skeleton from "../components/Skeleton";
import QuestionItem from "../components/forum/QuestionItem";

const App = props => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get('/api/topic/list')
            .then(resp => {
                setTopics(resp.data)
            })
    }, [])

    return (
        <>
            <Forum select={'chat'} isLogin={props.isLogin}>
                {/*<Skeleton/>*/}
                {
                    topics.map((topic, index) =>
                        <QuestionItem topic={topic} key={index}/>)
                }
            </Forum>
        </>
    )
}

export default App

export async function getServerSideProps(context) {

    let isLogin = false

    let cookieList = context.req.headers.cookie.split('; ')
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

    return {
        props: {
            isLogin
        }
    }
}