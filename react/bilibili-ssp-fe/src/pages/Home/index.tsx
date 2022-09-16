import React, { useEffect } from 'react'
import Header from '@/components/Header'
import { getPartitionsRequest } from '@/api/request'
import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { rootState } from '@/store'
import { getHomeDataAction } from '@/store/actionCreators'

interface HomeProps {
    loading: boolean,
    rankingPartitions: any[],
    rankingVideos: any[],
    getHomeDataActionDispatch: (rId: string) => void
}

const Home:React.FC<HomeProps> = (props) => {
    const {
        getHomeDataActionDispatch
    } = props
    useEffect(() => {
        getHomeDataActionDispatch("1")
    })
    return (
        <div>
            <Header />
        </div>
    )
}

const mapStateToProps = (state:rootState) => ({
    loading: state.loading,
    rankingPartitions: state.ranking.rankingPartitions,
    ranking: state.ranking.rankingVideos
})

const mapDispatchToPro = (dispatch: Dispatch) => ({
    getHomeDataActionDispatch(rId:string) {
        dispatch(getHomeDataAction(rId) as unknown as AnyAction)
    }
})

export default connect(mapStateToProps, mapDispatchToPro)(Home)