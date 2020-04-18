import axios from 'axios'
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: rgba(26,26,26,0.65);
`

const ModalContainer = styled.div`
    background: white;
    width: 100%;
    max-width: 500px;
    height: 300px;
    margin: 0 auto;
    border-radius: 5px;
`

// 问题标题输入框
const TitleInput = styled.input`
    display: block;
    width: calc(100% - 20px);
    padding: 10px;
    margin: 10px;
    outline: none;
    border: none;
    font-size: 22px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
`

// 问题描述输入框
const DescriptionInput = styled.textarea`
    display: block;
    height: 145px;
    width: calc(100% - 20px);
    margin: 0 10px;
    outline: none;
    font-size: 20px;
    border: none;
    resize: none;
`

// 发表按钮
const PositiveButton = styled.button`
    margin: 20px 60px;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    background: rgb(37, 184, 100);
    font-size: 1.1rem;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
    float: left;
    :active {
        background: #16914f;
    }
    @media(max-width: 600px) {
        margin: 20px 30px;
    }
`

// 取消按钮
const Button = styled.button`
    margin: 20px 60px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 1.1rem;
    background: white;
    cursor: pointer;
    outline: none;
    transition: all 0.2s;
    float: right;
    :active {
        background: gray;
    }
    @media(max-width: 600px) {
        margin: 20px 30px;
    }
`

/**
 * 话题输入对话框
 */
const QuestionInputModal = props => {
    return (
        <Container>
            <ModalContainer>
                <TitleInput placeholder={'问题'}/>
                <DescriptionInput placeholder={'问题描述'}/>
                <PositiveButton>发表</PositiveButton>
                <Button>取消</Button>
            </ModalContainer>
        </Container>
    )
}

export {
    QuestionInputModal
}