import styled from "styled-components";

const Container = styled.div`
    padding: 0 20px;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    
    h1 {
        text-align: center;
    }
    
    p {
        margin-top: 50px;
        line-height: 2rem;
    }
`

const Background = styled.div`
    position: absolute;
    left: calc(50% - 55px);
    top: 70px;
    width: 109px;
    height: 151px;
    background-image: url('/logo.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.1;
`

/**
 * 顶部介绍部分
 */
const Top = props => {
    return (
        <Container>
            <h1>您的数字遗产管家</h1>
            <p>
                随着互联网的普及和虚拟生活的拓展，人们在网络上留下数不胜数的痕迹。“DH盒子”(digital
                heritage)数字遗产管理网站以“数字遗产交流平台”作为出发点，涉及以下服务功能：数字遗产论坛交流；数字遗产法律援助窗口；数字遗产继承 产品。“DH盒子”为您的数字遗产保驾护航！
            </p>
            <Background/>
        </Container>
    )
}

export default Top