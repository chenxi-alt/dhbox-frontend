import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const LoginButton = styled.a`
    color: #969696;
    padding: 6px 12px;
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
`

const RegisterButton = styled.a`
    color: #0084ff;
    border-radius: 15px;
    padding: 5px 15px;
    border: 1px solid #0084ff;
    cursor: pointer;
    :hover {
        background: rgba(00, 132, 255, 0.08);
    }
`

// 用户没有登陆时，论坛顶部导航栏右侧显示的登录注册按钮
const Login = props => {

    const register = () => {
        location = '/register'
    }

    return (
        <Container>
            <LoginButton onClick={() => props.login(true)}>登录</LoginButton>
            <RegisterButton onClick={register}>注册</RegisterButton>
        </Container>
    )
}

export {
    Login
}