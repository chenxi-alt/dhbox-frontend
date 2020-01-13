import styled from "styled-components";

import Block from "./Block";
import {ConsultTitle} from "./Title";

const Img = styled.div`
    height: 350px;
    width: 70%;
    margin: 20px auto 0;
    background: #f6f6f6;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const style = {
    width: '200px',
    margin: '20px auto'
}

/**
 * DH咨询介绍
 */
const ConsultBlock = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <ConsultTitle/>
            <Img/>
            <Block style={style}>法律咨询窗口</Block>
        </div>
    )
}

export default ConsultBlock