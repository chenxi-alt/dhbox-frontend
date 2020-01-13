import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    user-select: none;
    padding-left: 10px;
`

/**
 * 网站首页logo
 */
const Logo = props => {
    return (
        <Container>
            <img src={'/logo.png'} alt={'logo'} height={35}/>
        </Container>
    )
}

export default Logo