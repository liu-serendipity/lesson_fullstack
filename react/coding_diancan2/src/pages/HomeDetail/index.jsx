import React from 'react';
import { Wrapper } from './style'
import { NavBar, Icon } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';

// console.log('-------');
const HomeDetail = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            {/* 路由出栈 */}
            <div className="detail-top">
                <NavBar 
                    icon={<Icon type="left" />}
                    onLeftClick={() => navigate(-1)}
                    className="detail-left"
                >
                    详情
                </NavBar>
            </div>
        </Wrapper>
    )
}

export default HomeDetail