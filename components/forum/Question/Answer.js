import axios from 'axios'
import styled from "styled-components";
import {useState, useEffect} from 'react'

import AnswerBlock from "./AnswerBlock";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    background: white;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    padding: 0 15px;
    margin: 15px auto 115px;
    position: relative;
`

const NumContainer = styled.div`
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid #f0f2f7;
`

/**
 * 问题页面所有回答
 */
const Answer = props => {

    // 加载评论
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get('/api/topic/' + props.topicId + '/comments')
            .then(resp => {
                setComments(resp.data)
            })
    }, [])

    return (
        <Container>
            <NumContainer>8 个讨论</NumContainer>
            {comments.map((item, index) => <AnswerBlock comment={item} key={index} topicId={props.topicId}/>)}
        </Container>
    )
}

export default Answer