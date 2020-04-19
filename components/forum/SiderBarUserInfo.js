import styled from "styled-components";

const AvatarContainer = styled.div`
    padding: 20px 20px 10px;
    text-align: center;
    img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
`

const Avatar = props => {
    return (
        <AvatarContainer>
            <img src={'https://pic4.zhimg.com/v2-952b08f07fb19d1b87f80cc7153da1ed_is.jpg'} alt={'avatar'}/>
            <div>用户名</div>
        </AvatarContainer>
    )
}

const OperationContainer = styled.div`
    width: 200px;
    flex-basis: 100px;
    padding: 10px;
    flex-grow: 0;
`
const UserOperationContainer = styled.div`
    padding: 5px 50px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`

const UserOperation = props => {
    return (
        <UserOperationContainer>
            <OperationContainer onClick={props.onClick}>
                <svg viewBox="0 0 1024 1024" width="35" height="35">
                    <path
                        d="M476.021333 544h63.424l8.533334-64h-63.424l-8.533334 64z m-8.533333 64l-9.098667 68.224a32 32 0 0 1-63.445333-8.448L402.912 608H352a32 32 0 0 1 0-64h59.445333l8.533334-64H352a32 32 0 0 1 0-64h76.512l9.098667-68.224a32 32 0 0 1 63.445333 8.448L493.088 416h63.424l9.098667-68.224a32 32 0 0 1 63.445333 8.448L621.088 416H672a32 32 0 0 1 0 64h-59.445333l-8.533334 64H672a32 32 0 0 1 0 64h-76.512l-9.098667 68.224a32 32 0 0 1-63.445333-8.448L530.912 608h-63.424zM157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z"
                        fill="#8590a6"/>
                </svg>
                <div>
                    写话题
                </div>
            </OperationContainer>
            <OperationContainer>
                <svg viewBox="0 0 1024 1024" width="33" height="33">
                    <path
                        d="M377.6 947.2l-48-48h361.6l-48 48c-70.4 73.6-192 73.6-265.6 0zM832 492.8v-115.2c0-166.4-128-304-288-320v-3.2c0-19.2-12.8-32-32-32s-32 12.8-32 32v3.2c-163.2 16-288 153.6-288 320v115.2c0 131.2-44.8 262.4-128 364.8h896c-83.2-102.4-128-233.6-128-364.8z m-576 0v-115.2c0-134.4 99.2-243.2 230.4-256l28.8-3.2 22.4 3.2c131.2 12.8 230.4 121.6 230.4 256v115.2c0 105.6 25.6 208 73.6 300.8H182.4C230.4 700.8 256 598.4 256 492.8z"
                        fill="#8590a6"/>
                </svg>
                <div>
                    消息
                </div>
            </OperationContainer>
        </UserOperationContainer>
    )
}

const Container = styled.div`

`

const UserInfo = props => {
    return (
        <Container>
            <Avatar/>
            <UserOperation onClick={props.onClick}/>
        </Container>
    )
}

export {
    UserInfo
}