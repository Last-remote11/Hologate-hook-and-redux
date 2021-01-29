import { CHANGE_SEARCH_FIELD } from './constrants'

export const setSearchField = (text) => {
    return {
        action: CHANGE_SEARCH_FIELD,
        payload: text
    }
}