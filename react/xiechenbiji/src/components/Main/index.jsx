import React, { useState, useEffect } from 'react';
import { Wrapper } from './style'
import UserInfo from '../UserInfo'
import ImgSwiper from '../ImgSwiper'
import ListSwiper from '../ListSwiper'
import Content from '../Content'
import Praise from '../Praise'
import Others from '../Others'
import Task from '../Task'
import Location from '../Location'
import LevelIcon from '../commons/LevelIcon'
import OpenCtrip from '../commons/OpenCtrip'
import PublishButton from '../commons/PublishButton'
import { getpersonInfo, getListInfo, getContent, getUserInfo, getOthers, getContentLocation } from '../../api/request'


const Main = () => {

    const [imgdata, setImgData] = useState([])
    const [listinfo, setListInfo] = useState([])
    const [content, setContent] = useState()
    const [useinfo, setUseInfo] = useState([])
    const [otherUsers, setOtherUsers] = useState([])
    const [contentLocation, setContentLocation] = useState()

    useEffect(() => {
        (async () => {
        let { data: imgData } = await getpersonInfo()
        let { data: listinfoData } = await getListInfo()
        let { data: contentData } = await getContent()
        let { data: useInfoData } = await getUserInfo()
        let { data: otherUsersData } = await getOthers()
        let { data: contentLocationData } = await getContentLocation()
        setImgData(imgData)
        setListInfo(listinfoData)
        setContent(contentData)
        setUseInfo(useInfoData)
        setOtherUsers(otherUsersData)
        setContentLocation(contentLocationData)
        })()
    }, [])

    return (
        <Wrapper>
            <div className="main">
                <UserInfo />
                <ImgSwiper imgdata={imgdata}/>
                <OpenCtrip text='打开携程App，查看高清大图' />
                <PublishButton />
                <Location contentLocation={contentLocation} />
                <LevelIcon />
                <ListSwiper listinfo={listinfo} />
                <Content content={content} />
                <Praise useinfo={useinfo} />
                <Others otherUsers={otherUsers} />
                <Task />
                <OpenCtrip text='打开携程App，查看更多笔记'/>
            </div>
        </Wrapper>
    )
}

export default Main