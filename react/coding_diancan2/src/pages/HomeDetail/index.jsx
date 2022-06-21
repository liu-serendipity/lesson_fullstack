import React, { useEffect } from 'react';
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate, Outlet, useParams } from 'react-router-dom';

// console.log('-------');
const HomeDetail = () => {
    const navigate = useNavigate()
    // console.log(useParams());
    let {id} = useParams()
    if (!id) {
        navigate("/home");
        return;
    }

    useEffect(() => {
        console.log('--------');
    })

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
                <div className="detail-title-box">
                    <div className="title-detail">
                        <h2>
                            <span>中国好凉皮</span>
                            <i className="fa fa-arrow-right"></i>
                        </h2>
                        <div className="detail-box">
                            <span>评价4.3</span>
                            <span>月售</span>
                            <span>商家配送</span>
                        </div>
                    </div>
                    <div className="sum-detail">
                        <div className="img-detail">
                            <span className="sale-detail">“满减”</span>
                            <span className="num-detail">满四十减1</span>
                        </div>
                        <div className="sale">
                            3个优惠
                        </div>
                    </div>
                    <p>公告：本店香锅不单炒，套餐必点！单加商品需与套餐同时点</p>
                </div>
                {/* <HomeDetailNav /> */}
                <Outlet />
            </div>
        </Wrapper>
    )
}

export default HomeDetail