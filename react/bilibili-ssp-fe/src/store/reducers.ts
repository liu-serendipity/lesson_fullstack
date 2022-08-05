import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from "./action-types";

const initialState = {
    oneLevelPartitions: [],
}

function combineOneLevelPartitions(oneLevelPartitions = 
    initialState.oneLevelPartitions,
    action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_ONE_LEVEL_PARTITIONS:
        return action.oneLevelPartitions;
        default:
        return oneLevelPartitions;
    }
}

export default combineReducers({
    oneLevelPartitions: combineOneLevelPartitions,
})