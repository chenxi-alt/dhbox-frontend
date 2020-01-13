import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 1.5rem;
    text-align: center;
    background: #f6f6f6;
    border-left: 5px solid gray;
    cursor: pointer;
    user-select: none;
    @media (max-width: 600px) {
        border-left: none;
        border-bottom: 5px solid gray;
        font-size: 1.2rem;
        margin: 0 5px;
    }
`

/**
 * （话题讨论、新闻热点。。。）装饰块
 */
const Block = props => {
    return (
        <Container style={props.style}>
            {props.children}
        </Container>
    )
}

export default Block