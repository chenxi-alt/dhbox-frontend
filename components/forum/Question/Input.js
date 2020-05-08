import {useRef} from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 10px 20px;
    position: relative;
    
    input {
        flex-grow: 1;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        outline: none;
        padding: 10px 15px;
        font-size: 18px;
        transition: all .2s;
        flex-basis: 10px;
        width: 10px;
    }
    button {
        transition: all 0.2s ease;
        position: absolute;
        right: 20px;
        top: 10px;
        height: 43px;
        padding: 0 15px;
        box-sizing: border-box;
        outline: none;
        font-size: 16px;
        border: none;
        color: white;
        cursor: pointer;
        transform: scale(0);
        border-radius: 5px;
        background-color: #0084ff;
    }
    
`

/**
 * 评论输入框
 */
const Input = props => {

    // 控制文本输入框的样式变换
    const onFocus = () => {
        input.current.style.borderColor = '#8590a6'
        input.current.style.marginRight = '90px'
        button.current.style.transform = 'scale(1)'
    }
    const onBlur = () => {
        if (props.value === '') {
            input.current.style.borderColor = '#ebebeb'
            input.current.style.marginRight = '0'
            button.current.style.transform = 'scale(0)'
        }
    }
    const input = useRef(null)
    const button = useRef(null)

    return (
        <Container>
            <input ref={input} placeholder={'请在此输入评论...'}
                   onFocus={onFocus} onBlur={onBlur}
                   value={props.value} onChange={props.onChange}/>
            <button ref={button} onClick={props.onClick}>发布</button>
        </Container>
    )
}

export default Input