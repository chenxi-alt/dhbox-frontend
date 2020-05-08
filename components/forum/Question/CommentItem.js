import styled from "styled-components";

import {Button} from "./AnswerBlock";

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    height: 35px;

    img {
        margin-right: 8px;
    }
`
// 用户头像
let User = props => {
    return (
        <UserContainer>
            <img src={'https://pic2.zhimg.com/v2-ec909032830354f6bcb054a8b04f0852_s.jpg'} width={24} height={24}/>
            {props.username}
        </UserContainer>
    )
}

const CommentContainer = styled.div`
    padding-left: 32px;
`
// 评论
const Comment = props => {
    return (
        <CommentContainer>
            <p>{props.content}</p>
        </CommentContainer>
    )
}

const Reply = props => {
    return (
        <div style={{cursor: 'pointer'}}>
            <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path
                    d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"
                />
            </svg>
            <span>回复</span>
        </div>
    )
}

const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    color: #cccccc;
    padding-left: 32px;
    height: 35px;
    font-size: 18px;
    svg {
        margin-right: 5px;
    }
`
// 点赞、回复
const Bottom = props => {
    return (
        <BottomContainer>
            <Button num={props.comment.vote}/>
            {/*表示反对按钮*/}
            <Button type={'negative'} num={''}/>
            <Reply/>
        </BottomContainer>
    )
}

const Container = styled.div`
    padding: 12px 20px;
    border-bottom: 1px solid #f6f6f6;
`

const CommentItem = props => {
    return (
        <Container>
            <User username={props.comment.username}/>
            <Comment content={props.comment.content}/>
            {/*点赞，反对，回复*/}
            <Bottom comment={props.comment}/>
        </Container>
    )
}

export default CommentItem

