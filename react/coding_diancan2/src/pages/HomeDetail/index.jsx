import React from 'react';
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';

// console.log('-------');
const HomeDetail = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            {/* 路由出栈 */}
            <div className="detail-top">
                <NavBar 
                    onBack={() => navigate(-1)}
                    back="返回"
                >
                    详情
                </NavBar>
            </div>
        </Wrapper>
    )
}

export default HomeDetail