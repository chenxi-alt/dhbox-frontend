import styled from "styled-components";

import {OutContainer} from "./Container";
import {BlockContainer} from "./Container";
import {ManageTitle} from "./Title";

const Img = styled.div`
    height: 350px;
    width: 100%;
    background: #f6f6f6;
    @media (min-width: 601px) {
        margin-right: 50px;
    }
`

const Block = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 1.5rem;
    text-align: center;
    background: #f6f6f6;
    border-right: 5px solid gray;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    @media (max-width: 600px) {
        border-right: none;
        border-bottom: 5px solid gray;
        font-size: 1.2rem;
        margin: 0 5px;
    }
`

const BlockContainer2 = styled(BlockContainer)`
    flex-basis: 320px;
    @media (max-width: 600px) {
        flex-basis: 60px;
        margin-top: 20px;
    }
`

/**
 * DH管理介绍
 */
const ManageBlock = props => {
    return (
        <>
            <ManageTitle/>
            <OutContainer style={{marginTop: '140px'}}>
                <Img/>
                <BlockContainer2>
                    <Block>个人数字遗产信息</Block>
                    <Block>数字遗产继承程序</Block>
                    <Block>数字遗产纪念册</Block>
                </BlockContainer2>
            </OutContainer>
        </>
    )
}

export default ManageBlock