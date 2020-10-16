import React, {useRef} from 'react'
import happy from './img/happy.png'
import birthday from './img/birthday.jpeg'
import rajinBanner from './img/upperBanner.webp'
import banner from './img/banner.webp'
import { Carousel } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import './index.css'

const styleOfCarousel = {
    height: "375px",
    width: "1400px",
    display: 'flex',
    flexFlow: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    margin: '0px auto'
}

const WebtoonCarousel = () => {
    const carouselRef : any = useRef()
    const prevFunction = () => {
        carouselRef.current.prev()
    }
    const nextFunction = () => {
        carouselRef.current.next()
    }
    return(
        <div className="carousel-banner-container">
            <Carousel autoplay effect="fade" ref={ref => {carouselRef.current = ref}}>
                <div >
                    <h3 style={styleOfCarousel} className="carousel-item-container">
                        <LeftOutlined onClick={() => prevFunction()} />
                        <img className="carousel-image" src={rajinBanner} alt="think" />
                        <RightOutlined onClick={() => (nextFunction())}/>
                    </h3>
                </div>
                <div >
                    <h3 style={styleOfCarousel} className="carousel-item-container">
                        <LeftOutlined onClick={() => prevFunction()} />
                        <img className="carousel-image" src={happy} alt="happy" />
                        <RightOutlined onClick={() => (nextFunction())}/>
                    </h3>
                </div>
                <div >
                    <h3 style={styleOfCarousel} className="carousel-item-container">
                        <LeftOutlined onClick={() => prevFunction()} />
                        <img className="carousel-image" src={banner} alt="banner" />
                        <RightOutlined onClick={() => (nextFunction())}/>
                    </h3>
                </div>
            </Carousel>
        </div>
    )
}

export default WebtoonCarousel;