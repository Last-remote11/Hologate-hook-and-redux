import { CHANGE_SEARCH_FIELD, ENABLE_DARKMODE } from './constants'

const initialStateVtubers = {
    searchField: ''
}

export const searchVtubers = (state=initialStateVtubers, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state
    }
}

const initialStateBackground = {
    background: 'body { background-color: black; }'
}

export const enableDarkMode = (state=initialStateBackground, action={}) => {
    if (action.type === ENABLE_DARKMODE) {
        switch (state.background) {
            case 'body { background-color: black; }':
                return {...state, background: 'body { background-color: white; }'}
            case 'body { background-color: white; }':
                return {...state, background: 'body { background-color: black; }'}
            default:
                return state
        }
    }
    else {
        return state
    }
}