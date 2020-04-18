import styled from 'styled-components'
import axios from 'axios'

import Input from '../Login/Input'
import Button from "../Login/Button";
import {useState} from "react";

const Container = styled.div`
    width: 100%;
    padding: 5px 20px;
`

const LoginBox = props => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const login = () => {
        axios.post('/api/user/login', {
            name,
            pass
        }).then(resp => {
            if (resp.data.code === 200) {
                localStorage.setItem('Token', resp.data.data)
                document.cookie = 'Token=' + resp.data.data + ';path=/;SameSite=Strict;max-age=86400'
                location = '/forum'
            } else {
                alert(resp.data.msg)
            }
        })
    }

    return (
        <Container>
            <h2>快速登录</h2>
            <Input placeholder={'用户名'} value={name} onChange={e => setName(e.target.value)}/>
            <Input placeholder={'密码'} type={'password'} value={pass} onChange={e => setPass(e.target.value)}/>
            <Button onClick={login}/>
        </Container>
    )
}

export {
    LoginBox
}