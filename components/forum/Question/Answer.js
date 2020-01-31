import styled from "styled-components";

import AnswerBlock from "./AnswerBlock";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    background: white;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    padding: 0 15px;
    margin: 15px auto;
    position: relative;
`

const NumContainer = styled.div`
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid #f0f2f7;
`

/**
 * 问题页面回答
 */
const Answer = props => {

    const text = [
        '数字遗产，是指被继承人死亡时遗留的个人所有的网络权益和财产。包括各种帐号及账号内的虚拟财产，比如QQ帐号本身及里面的虚拟货币，游戏帐号本身及里面的虚拟货币、武器装备、材料等。目前我国对数字遗产的立法不是十分完善，但是对于虚拟财产已经通过立法（《民法总则》）确定为法律上的财产。\n' +
        '根据现实财产的相关评估准则。我认为对虚拟财产的评估应该考虑以下几个方面：1、要对虚拟财产的合法性进行确认。2、该虚拟财产必须具有流通性。3、该虚拟财产必须具有可转让性。4、该虚拟财产必须具有有价性。合法性的确定是最根本的，如果该虚拟财产本身就不合法也就不存在后续的价值评估。必须具有流通性是因为，如果该财产不能流通或是根本就无法流通那它就失去了本省价值评估的意义。可转让性是为了能够在评估出响应价值后无论是继承或是转让都可以达到实际目标。有价性就要求该虚拟财产必须是有价值的，而不是有物无价的状态，这样就根本无法对起价值进行评估。\n' +
        '对于虚拟财产的价格评估目前还没有同意的标准。借鉴现实财产的评估原则，我总结了以下几点可以作为在虚拟财产评估价值中的一个参考。1、要参考该虚拟财产在运营商系统中的售价（包括现实货币价格或虚拟货币价格）。2、要参考该虚拟财产在用户之间的交易价格（包括现实货币价格或虚拟货币价格）。3、参考该虚拟财产获取的难易程度。4、参考拥护对获取该虚拟财产所投入的精力及时间。',
        '数字遗产，是指被继承人死亡时遗留的个人所有的网络权益和财产。一般分为虚拟货币、网络账号及密码、游戏装备、网店号等。至于价值评估的话，现在我们国家还没有相关的立法规定吧？据说美国有这类官司'
    ]

    return (
        <Container>
            <NumContainer>8 个讨论</NumContainer>
            {text.map((item, index) => <AnswerBlock text={item} key={index}/>)}
        </Container>
    )
}

export default Answer