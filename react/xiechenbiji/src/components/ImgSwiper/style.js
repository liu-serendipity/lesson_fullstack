import styled from 'styled-components';

export const Wrapper = styled.div`
    .media-layer {
        position: relative;
        height: 500px;
        .mediaSwiper {
            height: 100%;
            .swiper-slide {
                max-height: 500px;
                object-fit: cover;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
            }
        }
    }
`