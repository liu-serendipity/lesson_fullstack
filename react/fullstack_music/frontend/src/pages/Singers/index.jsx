import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// import { getSingerList } from '@/store/actionCreators'

const Singers = (props) => {

    // const { singerList, getSingerDispatch } = props
    useEffect(() => {
        // getSingerDispatch()
    }, [])

    return (
        <div>
            Singers
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // singers: state.singer.singers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getSingerDispatch() {
        //     dispatch(getSingerList())
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers)