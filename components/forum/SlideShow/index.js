import {useState, useEffect} from 'react'
import Swiper from "swiper";
import Head from "next/head";

/**
 * 轮播图
 */
const SlideShow = props => {

    useEffect(() => {
        let swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }, [])

    return (
        <>
            <Head>
                <link rel={'stylesheet'} href={'/swiper.min.css'}/>
                <link rel={'stylesheet'} href={'/slide.css'}/>
            </Head>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                    <div className="swiper-slide">Slide 5</div>
                </div>
                <div className="swiper-pagination"/>
            </div>
        </>
    )
}

export default SlideShow