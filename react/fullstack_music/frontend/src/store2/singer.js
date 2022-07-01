const defaultState = {
    singers: []
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_SINGER':
            return {
                ...state,
                singers: action.data
            }
    }
    return state
}

export default reducer