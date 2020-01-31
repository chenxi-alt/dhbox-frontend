import Link from 'next/link'
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    padding: 10px 16px;
    border: 1px solid #f0f2f7;
    h2 {
        margin: 8px 0;
        color: #333;
        :hover {
            color: #000077;
        }
    }
    a {
        text-decoration: none;
    }
    span {
        word-break: break-word;
        line-height: 1.6;
        font-size: 16px;
    }
    div {
        color: #444;
        :hover {
            color: #666;
        }
    }
`

/**
 * 新闻热点的一个item
 */
const NewsContentItem = props => {
    return (
        <Container>
            <Link href={'/forum/news/12'}>
                <a>
                    <h2>为什么说现在身份证号“打码”形同虚设？</h2>
                    <div>
                        <span>
                        身份证号码在日常生活中是作为个人隐私最重要的环节之一，理应做好保护措施，防止个人信息泄露被用于黑产违法行为。 但很多因素使得身份证号码隐身形同虚设，先看下图的这则公示： 肥肠贴心的为失信人的身份证号打上了…
                        </span>
                    </div>
                </a>
            </Link>
        </Container>
    )
}

export default NewsContentItem