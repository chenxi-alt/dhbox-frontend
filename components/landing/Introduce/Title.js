import styled from "styled-components";

const IndexContainer = styled.div`
    display: inline-block;
    font-weight: bold;
    position: relative;
    font-size: 2rem;
    padding: 0 5px;
    div {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 5px;
        height: 5px;
        background: black;
    }
`

//序号
const Index = props => {
    return (
        <IndexContainer>
            {props.children}
            {/*底部横线*/}
            <div/>
        </IndexContainer>
    )
}

const styles = {
    dh1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        display: 'inline-block',
        marginLeft: '15px',
        position: 'relative'
    },
    text1: {
        fontSize: '2rem',
        position: 'absolute',
        left: '110%',
        width: '70px',
        top: '25%',
    },
    dh2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        display: 'inline-block',
        marginRight: '15px',
        position: 'relative',
    },
    text2: {
        fontSize: '2rem',
        position: 'absolute',
        right: '110%',
        width: '70px',
        top: '25%',
    }
}

export const ForumTitle = () => {
    return (
        <>
            <Index>01</Index>
            <div style={styles.dh1}>
                DH
                <div style={styles.text1}>社区</div>
            </div>
        </>
    )
}

export const ManageTitle = () => {
    return (
        <div style={{float: 'right', marginTop: '50px'}}>
            <div style={styles.dh2}>
                <div style={styles.text2}>管理</div>
                DH
            </div>
            <Index>02</Index>
        </div>
    )
}

export const ConsultTitle = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}><Index>03</Index></div>
            <div style={{...styles.dh1, marginLeft: 'calc(50% - 70px)'}}>
                DH
                <div style={styles.text1}>咨询</div>
            </div>
        </div>
    )
}