import React from 'react'
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
                    <h2>{props.news.title}</h2>
                    <div>
                        <span>
                            {props.news.summary}
                        </span>
                    </div>
                </a>
            </Link>
        </Container>
    )
}

export default NewsContentItem