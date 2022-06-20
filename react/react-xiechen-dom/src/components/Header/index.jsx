import React from 'react';
import { HeaderWrapper } from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="header">
                <div className="header-fanhui">
                    <a href="#">
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                </div>
                <div className="header-xiala">
                    <a href="#">
                        <span>全球</span>
                        <i className="iconfont icon-xiala"></i>
                    </a>
                </div>
                <div className="header-sousuo">
                    <i className="iconfont icon-sousuo"></i>
                    <span>目的地/景点/话题</span>
                </div>
                <div className="header-img">
                    <img src="" alt="" />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header