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
        quill.setContents(props.text)
    }, [])

    return (
        <Container>
            <h1>中国首家互联网法院于杭州挂牌</h1>
            <span>来源：中国数字遗产网</span>
            <span>时间：2017-08-19</span>
            <span>浏览次数:1796</span>
            <div id="editor" style={{fontSize: '1.2rem'}}/>
        </Container>
    )
}

export default Article