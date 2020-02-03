import styled from "styled-components";

import CommentItem from "./CommentItem";
import Input from "./Input";

const Container = styled.div`
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    margin-top: 12px;
    border-radius: 4px;
`

const CommentCountContainer = styled.div`
    display: flex;
    height: 50px;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid #f6f6f6;
    
    h2 {
        font-weight: 600;
        font-size: 16px;
    }
`

// 评论数量
const CommentCount = props => {
    return (
        <CommentCountContainer>
            <h2>3 条评论</h2>
        </CommentCountContainer>
    )
}

/**
 * 问题的回答的评论列表
 */
const Comments = props => {
    return (
        <Container>
            <CommentCount/>
            <CommentItem/>
            <CommentItem/>
            <Input/>
        </Container>
    )
}

export default Comments