import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    padding: 0 15px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    
    h1 {
        margin: 0;
        padding: 15px 0;
    }
    
    blockquote {
        margin-top: 0;
        color: #646464;
        border-left: 4px solid #646464;
        margin-left: 0;
        padding-left: 10px;
        line-height: 1.5;
        @media (min-width: 700px) {
            font-size: 1.2rem;
        }
    }
`

/**
 * 问题页面的问题描述
 */
const Question = props => {
    return (
        <div style={{
            background: 'white', borderBottom: '1px solid rgba(0, 0, 0, .1)',
            boxShadow: '0 0 2px rgba(0, 0, 0, .1)'
        }}>
            <Container>
                <h1>哪些内容才能算作是数字遗产，价值如何评估？</h1>
                <blockquote>
                    法律规定，（俄克拉何马州）的居民有权管理已故亲属的网络帐户。俄州是美国少数几个立法规定如何处理逝者数字财产的州之一。受信息技术安全公司迈克菲(McAfee)委托展开的一项调查显示，全球各地消费者数字资产的平均价值为37438美元，这些资产包括在线照片库里的内容、个人信息和娱乐文件。
                </blockquote>
            </Container>
        </div>
    )
}

export default Question