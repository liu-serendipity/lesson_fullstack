import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// import { getRankList } from '@/store/actionCreators'

const Rank = (props) => {

    // const { rankList, getRankListDispatch } = props
    useEffect(() => {
        // setTimeout(() => {
        //     rankList.push({id: 3})
        // }, 1000)
        // getRankListDispatch()
    }, [])

    return (
        <div>
            Rank
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // rankList: state.rank.rankList
    }
}

// 状态改变的流程
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
    return {
        // getRankListDispatch() {
        //     // 派action
        //     dispatch(getRankList())
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)