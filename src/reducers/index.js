import { ADD_USERS, SET_SEED, SET_PAGE } from 'actions'

const initialState = {
    users: [],
    nationalities: ['ch', 'es', 'fr', 'gb'],
    page: 0
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users]
            }
        case SET_SEED:
            return {
                ...state,
                seed: action.seed
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state
    }
}

export default globalReducer