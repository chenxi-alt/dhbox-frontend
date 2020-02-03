import {useState, useEffect} from 'react'
import styled from "styled-components";
import dynamic from "next/dynamic";

import Skeleton from "../../Skeleton";
import Comments from "../Question/Comments";

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    background: white;
    @media (min-width: 600px) {
        padding: 0 24px;
    }
    padding: 0 15px;
    margin: 60px auto 0;
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`

const News = props => {
    let text = '{"ops":[{"insert":"\\t\\t"},{"attributes":{"background":"#ffffff","color":"#333333"},"insert":"8月18日上午，备受关注的杭州互联网法院正式挂牌。这是中国乃至全世界第一家互联网法院。按照“涉网纠纷在线审”的思路，杭州互联网法院将制定一套标准化、结构化的新型互联网审判方式，包括诉讼规程、庭审规范、当事人操作指南等，为全国法院互联网审判提供可复制、可推广的经验。"},{"insert":"\\n\\n\\t\\t"},{"attributes":{"bold":true},"insert":"为啥设立？——主动适应互联网发展大趋势"},{"insert":"\\n\\n\\t\\t网购买到假货，卖家却在千里之外……由于互联网的虚拟性、跨地域等特征，社会公众运用传统司法规则和诉讼方式解决涉网纠纷面临成本高、流程长的问题。互联网法院，正是在这一背景下应运而生【1】。\\n\\n\\t\\t随着民众生活向线上的转变，涉网纠纷越来越多，增长率超过300%。面对“民有所呼”的现实，2015年4月，浙江明确由当地四家法院作为网上法庭的试点法院，分别审理三类涉网纠纷及其上诉案件，尝试“网上纠纷网上化解”，成效初显，不到两年收案2万多件【2】。\\n\\n\\t\\t这是司法主动适应互联网发展大趋势的一项重大制度创新。互联网已经飞速发展很多年，互联网领域，尤其是电子商务领域的纠纷日益增多。所以需要探索涉网案件诉讼规则，完善审理机制，为维护网络安全、化解涉网纠纷、促进互联网和经济社会深度融合等提供司法保障【3】。\\n\\n\\t\\t最高人民法院院长周强8月18日在杭州强调，成立杭州互联网法院是以习近平同志为核心的党中央深化司法体制改革、全面推进依法治国的重大决策部署，是司法工作适应互联网发展大趋势的重要制度创新。要大力加强互联网法院建设，不断提升互联网司法能力，更好满足人民群众司法需求【4】。\\n\\n\\t\\t正如北京航空航天大学法学院教授肖建华所言，现在涉网案件数量越来越多，电商合同纠纷、网络侵权等线上案件数量增加很快，线上线下交织发生的法律问题层出不穷，如共享单车等物联网产生的知识产权侵权、人身伤害等案件，已经十分突出和普遍。\\n\\n\\t\\t北京大学互联网法律中心副主任杨明进一步指出，其中尤其在电子商务领域，合同纠纷非常多，淘宝、天猫、京东、亚马逊等电商平台，每天的投诉量都是一个巨大的数字【5】。\\n\\n\\t\\t杭州互联网法院院长杜前表示，为破解诉讼主体身份确认难、当事人在线质证难、在线行为控制难等难题，互联网法院形成了一套以诉讼平台操作规程和网络视频庭审规范为中心的程序规则。\\n \\n\\t\\t"},{"attributes":{"bold":true},"insert":"如何进行“网上审”？"},{"insert":"\\n\\n\\t\\t杭州互联网法院在18日揭牌当天开庭审理了一起案件：法官独自一人坐在审判台上，通过面前的一块大屏幕与诉讼双方交流。大约20分钟后，法官敲响法槌，庭审结束。杭州互联网法院副院长王江桥表示，通过互联网审案，打破了时空限制，把很多以前需要在庭审中完成的环节前移到开庭之前完成。庭审时集中对双方有争议的焦点问题展开调查辩论，可以有效节约庭审时间。“庭审时，法官可随时在屏幕上点击查看证据材料等各类诉讼文件，系统还会自动梳理出类似案例供法官参考。”王江桥说。\\n  杭州互联网法院将为公众提供便利的在线司法服务，将大数据、人工智能等技术工具融入平台系统，探索设计一整套适应互联网模式的司法规则和诉讼流程，低成本、高效率地解决发生在互联网上的新型纠纷。在互联网纠纷化解方面，探索建立涉网纠纷“一站式”解决机制，整合仲裁、调解、行政机关等组织的法律服务资源，实现数据共享，构建一个以互联网法院为终端的“漏斗型”纠纷化解通道【6】。\\n \\n\\t\\t"},{"attributes":{"bold":true},"insert":"可以审哪些案件？"},{"insert":"\\n\\n\\t\\t杭州互联网法院集中管辖杭州市辖区内基层人民法院有管辖权的下列涉互联网一审案件：\\n\\t\\t（1）互联网购物、服务、小额金融借款等合同纠纷； \\n\\t\\t（2）互联网著作权权属、侵权纠纷；\\n\\t\\t（3）利用互联网侵害他人人格权纠纷；\\n\\t\\t（4）互联网购物产品责任侵权纠纷；\\n\\t\\t（5）互联网域名纠纷；\\n\\t\\t（6）因互联网行政管理引发的行政纠纷；\\n\\t\\t（7）上级人民法院指定杭州互联网法院管辖其他涉互联网民事、行政案件【7】。\\n\\n\\t\\t"},{"attributes":{"bold":true},"insert":"设立背景"},{"insert":"\\n\\n\\t\\t在前期浙江电子商务网上法庭成功经验的基础上，2016年8月，浙江省高级人民法院党组首次正式提出了“设立互联网法院”的设想。\\n\\n\\t\\t2016年9月，浙江省委改革办和浙江高院分别向中央改革办和最高人民法院申请设立互联网法院试点，中央改革办和最高人民法院高度重视，经过多次调研，最终形成改革试点方案上报中央。\\n \\n【1】【4】【6】我国首家互联网法院挂牌，"},{"attributes":{"link":"http://news.163.com/17/0819/06/CS6BUI3T00018AOP.html"},"insert":"http://news.163.com/17/0819/06/CS6BUI3T00018AOP.html"},{"insert":"\\n【2】中国首家互联网法院诞生 “隔空诉讼”照进现实，"},{"attributes":{"link":"http://finance.ifeng.com/a/20170818/15587848_0.shtml"},"insert":"http://finance.ifeng.com/a/20170818/15587848_0.shtml"},{"insert":"\\n【3】【12】我国首家互联网法院将设在杭州，马云该哭该笑？"},{"attributes":{"link":"http://www.sohu.com/a/152360675_631742"},"insert":"http://www.sohu.com/a/152360675_631742"},{"insert":"\\n【5】【7】中国首家互联网法院于杭州挂牌 法官网上断案，"},{"attributes":{"link":"http://news.163.com/shuangchuang/17/0818/14/CS4LACO9000197V6.html"},"insert":"http://news.163.com/shuangchuang/17/0818/14/CS4LACO9000197V6.html"},{"insert":"\\n"}]}';
    const [init, setInit] = useState(false)
    const [article, setArticle] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            const Article = dynamic(() => import('./Article'), {
                ssr: false
            })
            setInit(true)
            setArticle(<Article text={JSON.parse(text)}/>)
        }, 1000)
    }, [])
    if (!init) {
        return (
            <Container>
                <Skeleton/>
            </Container>
        )
    }
    return (
        <Container>
            {article}
            <Comments/>
        </Container>
    )
}

export default News