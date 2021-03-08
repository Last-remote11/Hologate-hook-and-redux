import { CHANGE_SEARCH_FIELD, ENABLE_DARKMODE } from './constants'

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })

export const enableDarkMode = () => ({
    type: ENABLE_DARKMODE
})