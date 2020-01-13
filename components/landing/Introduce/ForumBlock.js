import styled from "styled-components";

import {OutContainer} from "./Container";
import {BlockContainer} from "./Container";
import {ForumTitle} from "./Title";
import Block from "./Block";

const Img = styled.div`
    height: 350px;
    width: 100%;
    background: #f6f6f6;
    @media (min-width: 601px) {
        margin-left: 50px;
    }
`

/**
 * DH论坛介绍
 */
const ForumBlock = props => {
    return (
        <>
            <ForumTitle/>
            <OutContainer>
                <BlockContainer>
                    <Block>话题讨论</Block>
                    <Block>新闻热点</Block>
                    <Block>维权案例</Block>
                    <Block>学术期刊</Block>
                </BlockContainer>
                <Img/>
            </OutContainer>
            </>
    )
}

export default ForumBlock