
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
        
        :focus {
            border-color: #8590a6;
            margin-right: 90px;
            & ~ button {
                transform: scale(1);
            }
        }
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

    const onFocus = () => {

    }

    return (
        <Container>
            <input placeholder={'请在此输入评论...'} value={props.value} onChange={props.onChange}/>
            <button onClick={props.onClick}>发布</button>
        </Container>
    )
}

export default Input