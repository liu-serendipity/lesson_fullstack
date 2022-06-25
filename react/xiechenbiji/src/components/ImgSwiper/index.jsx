import React, { useEffect } from 'react';
import { Wrapper } from './style';
import Swiper from 'swiper';

const ImgSwiper = ({imgdata}) => {
    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return 
        }
        swiper= new Swiper('.swiper-container', {
            loop: true,
            direction:"horizontal",
            pagination: {
                el:".swiper-pagination"
            }
        })
    }, [])

    const renderImg = () => {
        return imgdata.map(item => {
            return (
                <img 
                    src={item.pic} 
                    key={item.id}
                    className="swiper-slide"
                    />
            )
        })
    }

    return (
        <Wrapper>
            <div className="media media-layer">
                <div className="swiper-container mediaSwiper">
                    <div className="swiper-wrapper media-swiper-wrapper">
                        {renderImg()}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ImgSwiper