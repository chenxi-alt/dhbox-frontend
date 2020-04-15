import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    max-width: 350px;
    margin: 100px auto 0;
    text-align: center;
    
    @media (max-width: 550px) {
        margin-top: 20px;
    }
    
    p {
        font-size: 1.1rem;
    }
`

const Container = props => {
    return (
        <Div>
            <img src={'/logo.png'} alt={'logo'} width={'60'}/>
            <h2>DH盒子</h2>
            <p>您的数字遗产管家</p>
            {props.children}
        </Div>
    )
}

export {
    Container
}