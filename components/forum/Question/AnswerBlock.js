import {useState, useEffect} from 'react'
import styled from "styled-components";

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
            <svg viewBox="0 0 1024 1024" width="20" height="20">
                <path
                    d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
                    fill="currentColor"/>
                <path
                    d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
                    fill="currentColor"/>
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
            <span>匿名用户</span>
        </UserContainer>
    )
}

/**
 * 一个回答块
 */
const AnswerBlock = props => {
    return (
        <Container>
            <User/>
            <p>
                {props.text}
            </p>
            <TimeContainer>
                2020-01-29
            </TimeContainer>
            <BottomContainer>
                <Button num={10}/>
                {/*表示反对按钮*/}
                <Button type={'negative'} num={3}/>
            </BottomContainer>
        </Container>
    )
}

export default AnswerBlock