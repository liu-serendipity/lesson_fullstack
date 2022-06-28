import React from 'react';
import { connect } from 'react-redux';

const Recommend = (props) => {

    return (
        <div>
            Recommend
        </div>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        banners: state.recommend.banners
    }
}

export default connect(mapStateToProps)(Recommend)