import React from 'react';
import { TabWrapper } from './style'

const Tab = () => {
    return (
        <TabWrapper>
            <div className="tab">
                <div className="tab-li"><span>发现</span></div>
                <div className="tab-li"><span>玩乐</span></div>
                <div className="tab-li"><span>酒店</span></div>
                <div className="tab-li"><span>美食</span></div>
                <div className="tab-li"><span>亲子</span></div>
                <div className="tab-li"><span>小众</span></div>
                <div className="tab-li"><span>自驾</span></div>
                <div className="tab-li"><span>网红</span></div>
                <div className="tab-li"><span>视频</span></div>
                <div className="tab-li"><span>逛展</span></div>
            </div>
        </TabWrapper>
    )
}

export default Tab