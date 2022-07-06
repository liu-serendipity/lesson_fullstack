import * as actionTypes from './constants'
import { 
    getHotKeyWordsRequest, 
    getSuggestListRequest, 
    getResultSongsListRequest 
} from '@/api/request'

const changeHotKeyWords = (data) => ({
    type: actionTypes.SET_HOT_KETWORDS,
    data: data
})

const changeSuggestList = (data) => ({
    type: actionTypes.SET_SUGGEST_LIST,
    data: data
})

const changeResultSongs = (data) => ({
    type: actionTypes.SET_RESULT_SONGS_LIST,
    data: data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data: data
})

export const getHotKeyWords = () => {
    return (dispatch) => {
        getHotKeyWordsRequest()
            .then(data => {
                let list = data.result.hots;
                dispatch(changeHotKeyWords(list))
            })
    }
}