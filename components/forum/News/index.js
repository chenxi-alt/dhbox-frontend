import {useState, useEffect} from 'react'
import styled from "styled-components";
import dynamic from "next/dynamic";
import axios from 'axios'

import Skeleton from "../../Skeleton";
import Comments from "../Question/Comments";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    background: white;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    padding: 0 15px;
    margin: 60px auto 0;
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`

// 文章
const News = props => {
    const [articleComponent, setArticleComponent] = useState({
        init: false,
        component: null
    })
    useEffect(() => {
        let css = document.createElement('link')
        css.href = '/quill.snow.css'
        css.rel = 'stylesheet'
        document.head.appendChild(css)
        const Article = dynamic(() => import('./Article'), {
            ssr: false
        })
        axios.get('/api/article/' + props.articleId)
            .then(resp => {
                if (resp.data.code === 200) {
                    setArticleComponent({
                        init: true,
                        component: <Article article={resp.data.data}/>
                    })
                }
            })
    }, [])
    if (!articleComponent.init) {
        return (
            <Container>
                <Skeleton/>
            </Container>
        )
    }
    return (
        <Container>
            {articleComponent.component}
            {/*<Comments/>*/}
        </Container>
    )
}

export default News