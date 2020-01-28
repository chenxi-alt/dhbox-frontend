import styled from "styled-components";

/**
 * 话题讨论、新闻热点、维权案例、学术期刊的容器
 * 容器宽度不固定，由组件本身决定
 */
const NavContainer = styled.div`
    height: 100%;
    display: flex;
    padding: 0 15px;
    color: ${props => props.select ? '#0084ff' : '#444'};
    font-size: 1.1rem;
    line-height: 59px;
    
    //设置文字距离左边icon的宽度
    & span {
        margin-left: 5px;
    }

    @media (max-width: 600px) {
        padding: 0 10px;
        & svg {
            width: 0;
        }
        & span {
            margin-left: 0;
            line-height: 49px;
        }
    }
    cursor: pointer;
    user-select: none;
    :hover {
        color: #0084ff;
    }
    border-bottom: ${props => props.select ? '3px solid #0084ff' : 'none'};
`

export default NavContainer