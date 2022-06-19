import React from 'react';
import { HeaderWrapper } from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="header">
                <a href="#">
                    <i className="iconfont icon-fanhui"></i>
                </a>
                <div>
                    <a href="#">
                        <span>全球</span>
                        <i className="iconfont icon-xiala"></i>
                    </a>
                </div>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" />
                    <span>目的地/景点/话题</span>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header