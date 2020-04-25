import axios from 'axios'
import styled from "styled-components";
import {useState} from 'react'

import Input from "./Input";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #eee;
    width: 100%;
`

/**
 * 问题接面底部回答输入框
 */
const BottomAnswerInput = props => {

    const [value, setValue] = useState('')

    const publishComment = () => {
        axios.put('/api/topic/' + props.topicId + '/comment', {
            content: value
        }, {
            headers: {
                Token: localStorage.getItem('Token')
            }
        }).then(resp => {
            if (resp.data.code === 200) {
                location.reload()
            }
        }).catch(() => {
        })
    }

    return (
        <Container>
            <div style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
                <Input onClick={publishComment} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        </Container>
    )
}

export {
    BottomAnswerInput
}
