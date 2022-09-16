import { combineReducers, AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
    loading: true,
    ranking: {
        rankingPartitions: [],
        rankingVideos: []
    }
}

const loadingReducer = (state = initialState.loading, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const rankingReducer = (state = initialState.ranking, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_RANKING_PARTITIONS:
            return {
                ...state,
                rankingPartitions: action.data
            }
            break
        case actionTypes.SET_RANKING_VIDEOS:
            return {
                ...state,
                rankingVideos: action.data
            }
            break
        default:    
            return state
    }
}

export default combineReducers({
    loading: loadingReducer,
    ranking: rankingReducer
})

