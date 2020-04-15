import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin: 15px 0; 
    input {
        width: 100%;
        outline: none;
        padding: 10px 30px 10px 95px;
        font-size: 1.2rem;
        border: 1px solid rgb(217, 217, 217);
        box-sizing: border-box;
        border-radius: 5px;
        :focus {
            border-color: #47c479;
            box-shadow: 0 0 0 2px rgba(37,184,100,.2);
        }
        :hover {
            border-color: #47c479;
        }
    }
    div {
        display: flex;
        position: absolute;
        align-items: center;
        left: 9px;
        top: 0;
        height: 100%;
        color: #8c8c8c;
        padding-right: 9px;
        border-right: 1px solid #8c8c8c;
    }
`

const PhoneInput = props => {
    return (
        <Container>
            <div>中国 +86</div>
            <input placeholder={'手机号'}/>
        </Container>
    )
}

export {
    PhoneInput
}