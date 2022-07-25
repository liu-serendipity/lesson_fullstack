import * as ActionTypes from '../action-types'
import { Dispatch, AnyAction } from 'redux'
import { getPartitionsRequest } from '@/api/partitions'

export const setPartitions = (data: any[]) => ({
    type: ActionTypes.SET_PARTITION,
    data
})

export const getPartitions = () => {
    return (dispatch:Dispatch<AnyAction>) => {
        getPartitionsRequest()
            .then(data => {
                dispatch(setPartitions(data))
            })
    }
}