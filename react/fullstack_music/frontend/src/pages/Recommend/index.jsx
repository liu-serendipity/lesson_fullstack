import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getBannerList } from '@/store/actionCreators';
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll from '@/components/common/Scroll'
import Slider from '@/components/slider'

const Recommend = (props) => {
    const { banners, getBannerDataDispatch } = props;
    let songsCount = 2;
    useEffect(() => {
        getBannerDataDispatch()
    }, [])
    return (
        <Content play={songsCount} >
            <Scroll className="list">
                <div>
                    <Slider bannerList={banners}></Slider>
                </div>
            </Scroll>
        </Content>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        banners: state.recommend.banners
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);