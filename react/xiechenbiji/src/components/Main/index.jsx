import React, { useState, useEffect } from 'react';
import UserInfo from '../UserInfo'
import ImgSwiper from '../ImgSwiper'
import { getpersonInfo } from '../../api/request'
import { Wrapper } from './style'

const Main = () => {
    const [imgdata, setImgData] = useState([])
    useEffect(() => {
        (async () => {
        let { data: imgData } = await getpersonInfo()
        setImgData(imgData)
        })()
    }, [])
    return (
        <Wrapper>
            <div className="main">
                <UserInfo />
                <ImgSwiper imgdata={imgdata}/>
                <div className="openCtrip_media">打开携程App，查看高清大图</div>
                <div className="publish-button"></div>
            </div>
        </Wrapper>
    )
}

export default Main