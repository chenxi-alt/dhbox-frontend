import styled from "styled-components";
import Link from "next/link";

const Container = styled.ul`
    list-style: none;
    padding: 10px 0;
    li {
        display: inline-block;
        width: 33.3%;
        text-align: center;
        a {
            text-decoration: none;
            color: #096dd9;
        }
    }
`

//登录框底部的注册、忘记密码、遇到问题区域
const Bottom = () => {
    return (
        <Container>
            <li><Link href={'/'}><a>快速注册</a></Link></li>
            <li><Link href={'/'}><a>忘记密码</a></Link></li>
            <li><Link href={'/'}><a>遇到问题</a></Link></li>
        </Container>
    )
}

export default Bottom