import styled from "styled-components";

export const OutContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 200px;
    justify-content: space-around;
    @media (max-width: 600px) {
        flex-direction: row;
        flex-basis: 80px;
    }
`