import styled from "styled-components";

const CaptchaContainer = styled.div`
    display: flex;
    margin: 15px 0;
`

const InputContainer = styled.input`
    width: 100%;
    outline: none;
    padding: 10px 15px;
    font-size: 1.2rem;
    border: 1px solid rgb(217, 217, 217);
    box-sizing: border-box;
    border-radius: 5px;
    :focus {
        border-color: #47c479;
        box-shadow: 0 0 0 2px rgba(37,184,100,.2);
    }
    :hover {
        border-color: #47c479;
    }
`

// 验证码输入框
const CaptchaInput = props => {
    return (
        <InputContainer placeholder={'验证码'}/>
    )
}

const ButtonContainer = styled.button`
    outline: none;
    border: none;
    width: 180px;
    margin-left: 5px;
    background: white;
    color: #24c458;
    cursor: pointer;
`
// 获取验证码按钮
const CaptchaButton = props => {
    return (
        <ButtonContainer>获取短信验证码</ButtonContainer>
    )
}

export {
    CaptchaInput,
    CaptchaButton,
    CaptchaContainer
}