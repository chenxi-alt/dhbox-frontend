import styled from "styled-components";

import Top from "./Top";
import ForumBlock from "./ForumBlock";
import ManageBlock from "./ManageBlock";
import ConsultBlock from "./ConsultBlock";

//介绍部分，底部（社区，管理，咨询）容器
const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 100px auto 0;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    @media (max-width: 600px) {
        margin-top: 15px;
        padding: 0 10px;
    }
`

/**
 * 网站首页导航栏下面的介绍部分
 */
const Introduce = props => {
    return (
        <>
            <Top/>
            <Container>
                <ForumBlock/>
                <ManageBlock/>
                <ConsultBlock/>
            </Container>
        </>
    )
}

export default Introduce