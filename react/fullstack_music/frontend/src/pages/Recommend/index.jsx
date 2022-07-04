import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll from '@/components/common/Scroll'
import Slider from '@/components/slider'
import RecommendList from '@/components/list'
import { forceCheck } from 'react-lazyload'
import { EnterLoading } from '@/pages/Singers/style'
import Loading from '@/components/common/loading-v2'

function Recommend(props) {
    const { banners, songsCount, recommendList, enterLoading } = props;
    const { getBannerDataDispatch, getRecommendListDispatch } = props;
    // let songsCount = 2;

    useEffect(() => {
        getBannerDataDispatch();
        getRecommendListDispatch();
    }, []);

    return (
        <Content play={songsCount}>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={banners}></Slider>
                    <RecommendList recommendList={recommendList} />
                </div>
            </Scroll>
            { enterLoading? <EnterLoading><Loading></Loading></EnterLoading> : null }
        </Content>
    )
}
// state 状态树
const mapStateToProps = state => {
    return {
        banners: state.recommend.bannerList,
        recommendList: state.recommend.recommendList,
        songsCount: state.player.playList.length,
        enterLoading: state.recommend.enterLoading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getBannerDataDispatch(){
            dispatch(actionCreators.getBannerList())
        },
        getRecommendListDispatch(){
            dispatch(actionCreators.getRecommendList())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
