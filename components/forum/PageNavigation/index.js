import styled from "styled-components";

import Chat from "./Chat";
import News from "./News";
import Law from "./Law";
import Periodical from "./Periodical";

const Container = styled.div`
    position: relative;
    max-width: 800px;
    width: 100%;
    height: 60px;
    background: white;
    border-radius: 2px;
    display: flex;
    @media (max-width: 600px) {
        height: 50px;
    }
`

/**
 * 导航栏（话题讨论，新闻热点，维权案例，学术期刊）
 */
const PageNavigation = () => {
    return (
        <Container>
            <Chat select={true}/>
            <News/>
            <Law/>
            <Periodical/>
        </Container>
    )
}

export default PageNavigation