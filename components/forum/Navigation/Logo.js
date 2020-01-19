import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    width: 150px;
    padding-left: 10px;
    @media (min-width: 600px) {
        left: 24px;
    }
`

const Text = styled.div`
    font-size: 1.5rem;
    margin-left: 10px;
    text-decoration: none;
    color: black;
`

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <Container>
                    <img src={'/favicon.ico'} alt={'logo'} width={32} height={32}/>
                    <Text>DH社区</Text>
                </Container>
            </a>
        </Link>
    )
}

export default Logo
