import axios from 'axios'
import {useState} from 'react'

import Input from "../components/Login/Input";
import Button from "../components/Login/Button";
import Bottom from "../components/Login/Bottom";

const Login = () => {
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
        <div>
            <div className={'form'}>
                <img src={'/logo.png'} alt={'logo'} width={'60'}/>
                <h2>DH盒子</h2>
                <p>您的数字遗产管家</p>
                <Input placeholder={'用户名'} value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder={'密码'} type={'password'} value={pass} onChange={e => setPass(e.target.value)}/>
                <Button onClick={login}/>
                <Bottom/>
            </div>
            <style jsx>{`
                .form {
                    width: 100%;
                    max-width: 350px;
                    background: white;
                    margin: 120px auto 0;
                    text-align: center;
                }
                @media (min-width: 600px) {
                    .form {
                        margin-top: 150px;
                    }                
                }
                p {
                    font-size: 1.1rem;
                    margin-bottom: 30px;
                }
            `}</style>
            <style jsx global>{`
                html, body {
                     margin: 0;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}

export default Login