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
                <h1>{props.topic.title}</h1>
                <blockquote>
                    {props.topic.description}
                </blockquote>
            </Container>
        </div>
    )
}

export default Question