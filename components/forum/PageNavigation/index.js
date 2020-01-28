import styled from "styled-components";

import Chat from "./Chat";
import News from "./News";
import Law from "./Law";
import Periodical from "./Periodical";
import Link from "next/link";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    background: white;
    border-radius: 2px;
    display: flex;
    border-bottom: 1px solid #f0f2f7;
    @media (max-width: 600px) {
        height: 50px;
    }
    a {
        text-decoration: none;
    }
`

/**
 * 导航栏（话题讨论，新闻热点，维权案例，学术期刊）
 */
const PageNavigation = props => {
    return (
        <Container>
            <Link href={'/forum'}><a><Chat select={props.select === 'chat'}/></a></Link>
            <Link href={'/forum/news'}><a><News select={props.select === 'news'}/></a></Link>
            <Link href={'/forum/law'}><a><Law select={props.select === 'law'}/></a></Link>
            <Link href={'/forum/periodical'}><a><Periodical select={props.select === 'periodical'}/></a></Link>
        </Container>
    )
}

export default PageNavigation