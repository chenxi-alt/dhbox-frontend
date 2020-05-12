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
        max-height: 50px;
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

    let summary = props.news.summary.length > 130 ? props.news.summary.substring(0, 130) + '...'
        : props.news.summary + '...'

    return (
        <Container>
            <Link prefetch={false} href={'/forum/article/' + props.news.id}>
                <a>
                    <h2>{props.news.title}</h2>
                    <div>
                        <span>
                            {summary}
                        </span>
                    </div>
                </a>
            </Link>
        </Container>
    )
}

export default NewsContentItem