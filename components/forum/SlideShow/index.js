import {useState, useEffect} from 'react'
import Swiper from "swiper";
import "swiper/css/swiper.min.css"

import "./index.css"

/**
 * 轮播图
 */
const SlideShow = props => {
    const [isMobile, setIsMobile] = useState(true)
    useEffect(() => {
        setIsMobile(window.innerWidth <= 700)
    }, [isMobile])
    useEffect(() => {
        if (!isMobile) {
            let swiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })
            return () => {
                swiper.destroy()
            }
        } else {
            let swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            })
            return () => {
                swiper.destroy()
            }
        }

    })
    if (isMobile) {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"/>
            </div>
        )
    }
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

        </div>
    )
}

export default SlideShow