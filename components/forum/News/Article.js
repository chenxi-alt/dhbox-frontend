import {useEffect} from 'react'
import styled from "styled-components";
import Quill from 'quill'

const Container = styled.div`
    width: 100%;
    text-align: center;
    
    h1 {
        margin: 0;
        padding: 15px 0;
        font-size: 1.5rem;
    }
    span {
        margin: 0 15px;
    }
`

/**
 * 新闻文章
 */
const Article = props => {
    useEffect(() => {
        let quill = new Quill('#editor', {
            readOnly: true
        })
        quill.setContents(JSON.parse(props.article.content))
    }, [])

    return (
        <Container>
            <h1>{props.article.title}</h1>
            <div id="editor" style={{fontSize: '1.2rem'}}/>
        </Container>
    )
}

export default Article