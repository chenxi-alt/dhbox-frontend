import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Forum from "../../components/forum";
import NewsContentItem from "../../components/forum/NewsContentItem";
import Skeleton from "../../components/Skeleton";

const App = () => {

    let [data, setData] = useState({
        loading: true,
        news: []
    })

    useEffect(() => {
        axios.get('/api/article/3/list')
            .then(resp => {
                if (resp.data.code === 200) {
                    setData({
                        loading: false,
                        news: resp.data.data
                    })
                }
            })
    }, [])

    return (
        <>
            <Forum select={'periodical'}>
                {
                    data.loading ? <Skeleton/> :
                        data.news.map(item => <NewsContentItem news={item} key={item.id}/>)
                }
            </Forum>
        </>
    )
}

export default App