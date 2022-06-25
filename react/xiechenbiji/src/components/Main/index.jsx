import React, { useState, useEffect } from 'react';
import { Wrapper } from './style'
import UserInfo from '../UserInfo'
import ImgSwiper from '../ImgSwiper'
import ListSwiper from '../ListSwiper'
import Content from '../Content'
import { getpersonInfo, getListInfo, getContent } from '../../api/request'
import { LocationFill, RightOutline } from 'antd-mobile-icons'

const Main = () => {
    const [imgdata, setImgData] = useState([])
    const [listinfo, setListInfo] = useState([])
    const [content, setContent] = useState([])
    useEffect(() => {
        (async () => {
        let { data: imgData } = await getpersonInfo()
        let { data: listinfoData } = await getListInfo()
        let { data: contentData } = await getContent()
        setImgData(imgData)
        setListInfo(listinfoData)
        setContent(contentData)
        })()
    }, [])
    return (
        <Wrapper>
            <div className="main">
                <UserInfo />
                <ImgSwiper imgdata={imgdata}/>
                <div className="openCtrip_media">打开携程App，查看高清大图</div>
                <div className="publish-button"></div>
                <div className="poitag detail_poi_wrap poi_wrap_level">
                    {/* 可以拉出去作为一个单独的组件块，接口数据map 目前写死*/}
                    <div className="poiItem detail_poi_item">
                        <LocationFill />
                        <span className="poi_item_name">三亚</span>
                        <RightOutline />
                    </div>
                    <div className="poiItem detail_poi_item">
                        <LocationFill className="location-fill"/>
                        <span className="poi_item_name">
                            三亚安隅酒店
                            <span className="poicount poi_item_count">64篇</span>
                        </span>
                        <RightOutline className="right-outline" />
                    </div>
                </div>
                {/* 可以根据点赞数大于多少更新状态，添加此组件块 */}
                <div className="level_icon_wrap">
                    <img src="https://pages.c-ctrip.com/you/user/careful_chosen.png" alt="" className="level_icon_img" />
                </div>
                <ListSwiper listinfo={listinfo} />
                <Content content={content}/>
            </div>
        </Wrapper>
    )
}

export default Main