import axios from 'axios'

import Forum from "../components/forum";
import Skeleton from "../components/Skeleton";
import QuestionItem from "../components/forum/QuestionItem";

const App = props => {
    let tiles = [
        '如何看待女子从武汉回河南后至今无症状，其 5 名亲人患新型肺炎？',
        '哪些内容才能算作是数字遗产，价值如何评估？',
        '如何评价 1 月 28 日毕志飞怒斥徐峥，喊话徐峥「滚出电影圈」？'
    ]
    return (
        <>
            <Forum select={'chat'} isLogin={props.isLogin}>
                {/*<Skeleton/>*/}
                {
                    tiles.map((title, index) => <QuestionItem title={title} key={index}/>)
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