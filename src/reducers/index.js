import { 
    ADD_USERS, ADD_USERS_TO_NEXT_PAGE, SET_SEED, SET_PAGE, 
    START_LOADING_USERS, FINISH_LOADING_USERS
} from 'actions'
import { BATCH_SIZE, MAX_USERS } from 'config';

const initialState = {
    users: [],
    nationalities: ['ch', 'es', 'fr', 'gb'],
    page: 0,
    pages: Math.floor(MAX_USERS / BATCH_SIZE),
    loading: false,
    nextPage: []
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
        case START_LOADING_USERS:
            return {
                ...state,
                loading: true
            }
        case FINISH_LOADING_USERS:
            return {
                ...state,
                loading: false
            }
        case ADD_USERS_TO_NEXT_PAGE:
            return {
                ...state,
                nextPage: [...action.users],
                loading: false
            }
        default:
            return state
    }
}

export default globalReducer