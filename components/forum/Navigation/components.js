import styled from "styled-components";

const Container = styled.div`
    color: #8590a6;
    padding: 0 15px;
    img {
        width: 35px;
        height: 35px;
    }
    svg {
        /* margin-top: 5px; */
    }
`
/**
 * 论坛导航的消息通知图标
 */
const Message = props => {
    return (
        <Container>
            <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                <path
                    d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"/>
            </svg>
        </Container>
    )
}

const User = props => {
    return (
        <Container>
            <img src={'https://pic4.zhimg.com/v2-952b08f07fb19d1b87f80cc7153da1ed_is.jpg'}/>
        </Container>
    )
}

export {
    Message,
    User
}
