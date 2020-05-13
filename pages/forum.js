import {useState, useEffect, Suspense} from 'react'
import axios from 'axios'
import useSWR from "swr";

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

    const {data} = useSWR('/api/topic/list', axios)

    return (
        <>
            <Forum select={'chat'} isLogin={props.isLogin}>
                {data ?
                    data.data.map((topic, index) =>
                        <QuestionItem topic={topic} key={index}/>)
                    : <Skeleton/>}
            </Forum>
        </>
    )
}

export default App

export async function getServerSideProps(context) {

    let isLogin = false
    let cookie = context.req.headers.cookie
    let cookieList = []
    if (cookie !== undefined)
        cookieList = context.req.headers.cookie.split('; ')
    let token = cookieList.find(s => s.startsWith('Token'))
    if (token !== undefined) {
        token = token.substring(6)
        const res = await axios.get('/api/user/login/status', {
            headers: {
                Token: token
            }
        }).catch(err => {
            console.log(err)
        })
        isLogin = res.data.code === 200
    }

    return {
        props: {
            isLogin
        }
    }
}