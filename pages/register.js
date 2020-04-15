import {useState} from 'react'
import axios from 'axios'

import {Container} from '../components/register/Container'
import Input from "../components/Login/Input";
import {PhoneInput} from "../components/register/PhoneInput";
import {CaptchaContainer, CaptchaButton, CaptchaInput} from "../components/register/Captcha";
import {RegisterButton} from "../components/register/RegisterButton";

const Register = () => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const register = () => {
        axios.post('/api/user/register', {
            name,
            pass
        }).then(resp => {
            if (resp.data.code === 200) {
                alert('注册成功')
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
            <Input placeholder={'用户名'} value={name} onChange={e => setName(e.target.value)}/>
            <Input placeholder={'密码'} type={'password'} value={pass} onChange={e => setPass(e.target.value)}/>
            <Input placeholder={'确认密码'} type={'password'}/>
            <PhoneInput/>
            <CaptchaContainer>
                <CaptchaInput/>
                <CaptchaButton/>
            </CaptchaContainer>
            <RegisterButton onClick={register}/>
        </Container>
    )
}

export default Register