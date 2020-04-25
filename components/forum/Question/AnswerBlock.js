import {useState, useEffect} from 'react'
import styled from "styled-components";

import Comments from "./Comments";

const Container = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #f0f2f7;
    p {
        line-height: 1.5;
        margin: 0;
        font-size: 1.1rem;
    }
`

const TimeContainer = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 5px 20px 5px 0;
    color: #8590a6;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    img {
        width: 36px;
    }
    span {
        padding: 0 10px;
        font-weight: bold;
    }
`

const BottomContainer = styled.div`
    display: flex;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: inline-flex;
    align-items: center;
    color: ${props => props.color};
    cursor: pointer;
    font-size: 18px;
    margin-right: 15px;
    :hover {
        color: ${props => props.type === 'negative' ? 'pink' : '#0084ff'};
    }
    svg {
        transform: ${props => props.type === 'negative' ? 'rotate(180deg)' : 'none'};
        margin-right: 5px;
    }
`

const Button = props => {
    const [color, setColor] = useState('#cccccc')
    const [num, setNum] = useState(props.num)

    const click = () => {
        if (color === '#cccccc') {
            setColor(props.type === 'negative' ? 'pink' : '#0084ff')
            setNum(num + 1)
        } else {
            setColor('#cccccc')
            setNum(num - 1)
        }
    }

    return (
        <ButtonContainer type={props.type} color={color} onClick={click}>
            <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path
                    d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                />
            </svg>
            <span>{num}</span>
        </ButtonContainer>
    )
}

/**
 * 用户名和头像
 */
const User = props => {
    return (
        <UserContainer>
            <img src={'https://pic1.zhimg.com/f11b438c48e25363ec09f08a7ac7d579_xs.jpg'} alt={'avatar'}/>
            <span>{props.username}</span>
        </UserContainer>
    )
}

/**
 * 一个回答块
 */
const AnswerBlock = props => {
    return (
        <Container>
            <User username={props.comment.parent.username}/>
            <p>
                {props.comment.parent.content}
            </p>
            {/*时间*/}
            <TimeContainer>
                {props.comment.parent.publishTime}
            </TimeContainer>
            {/*点赞反对*/}
            <BottomContainer>
                <Button num={props.comment.parent.vote}/>
                {/*表示反对按钮*/}
                <Button type={'negative'} num={0}/>
            </BottomContainer>
            {/*子评论*/}
            <Comments comments={props.comment.child} topicId={props.topicId} pId={props.comment.parent.id}/>
        </Container>
    )
}

export default AnswerBlock

export {
    Button
}