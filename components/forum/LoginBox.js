import styled from 'styled-components'

import Login from '../Login/Input'
import Button from "../Login/Button";

const Container = styled.div`
    width: 100%;
    padding: 5px 20px;
`

const LoginBox = props => {

    return (
        <Container>
            <h2 onClick={() => console.log('a')}>快速登录</h2>
            <Login/>
            <Login type={'password'}/>
            <Button onClick={() => props.setLogin(true)}/>
        </Container>
    )
}

export {
    LoginBox
}