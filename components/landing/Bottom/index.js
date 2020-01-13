import styled from "styled-components";

const UL = styled.ul`
    list-style: none;
    line-height: 50px;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        padding: 0 15px;
    }
`

const Container = styled.div`
    text-align: center;
    padding: 30px 0;
`

const Bottom = () => {
    return (
        <Container>
            <UL>
                <li>关于DH盒子</li>
                <li>使用帮助</li>
                <li>数据安全</li>
                <li>服务协议</li>
                <li>English</li>
            </UL>
        </Container>
    )
}

export default Bottom