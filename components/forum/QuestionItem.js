import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    padding: 10px 16px;
    border-bottom: 1px solid #f0f2f7;
    h2 {
        margin: 8px 0;
        color: #333;
        :hover {
            color: #000077;
        }
    }
    span {
        display: inline-flex;
        align-items: center;
        padding: 5px 20px 5px 0;
        color: #8590a6;
        svg {
            margin-right: 5px;
        }
    }
`

/**
 * 话题讨论的一个item
 */
const QuestionItem = props => {
    return (
        <Container>
            <h2>{props.title}</h2>
            <span>
                <svg viewBox="0 0 1024 1024" version="1.1" width="20" height="20">
                    <path
                        d="M883.7 301.2H532.3c-42.7 3.9-76.3 39.9-76.3 83.5V664.4c0 46.3 37.7 83.9 84 83.9h75.8L792 891V748.4h84c46.3 0 84-37.6 84-83.9V384.8c0-43.7-33.6-79.7-76.3-83.6z"
                        fill="#8590a6"/>
                    <path
                        d="M530.5 261.2H680v-44.3c0-46.3-37.7-83.9-84-83.9H148c-46.3 0-84 37.7-84 83.9v335.7c0 46.3 37.7 83.9 84 83.9h28v142.1l177.8-142.1H416V384.8c0-31.1 11.6-60.8 32.7-83.7 20.9-22.8 49.3-36.8 80-39.6l1.8-0.3z"
                        fill="#8590a6"/>
                </svg>
                14条讨论
            </span>
            <span>
                <svg viewBox="0 0 1024 1024"  width="20" height="20"><path
                    d="M512 938.666667c235.637333 0 426.666667-191.029333 426.666667-426.666667S747.637333 85.333333 512 85.333333 85.333333 276.362667 85.333333 512s191.029333 426.666667 426.666667 426.666667zM329.376 649.376L480 498.741333V320a32 32 0 0 1 64 0v192a32 32 0 0 1-9.376 22.624l-160 160a32 32 0 1 1-45.248-45.248z"
                    fill="#8590a6"/>
                </svg>
                2020-01-29
            </span>
        </Container>
    )
}

export default QuestionItem