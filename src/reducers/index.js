import { 
    ADD_USERS, ADD_NEXT_BATCH_OF_USERS, SET_SEED, SET_PAGE, 
    START_LOADING_USERS, FINISH_LOADING_USERS
} from 'actions'
import { BATCH_SIZE, MAX_USERS } from 'config';

const initialState = {
    nationalities: ['ch', 'es', 'fr', 'gb'],
    users: [],
    nextBatchOfUsers: [],
    page: 0,
    maxUsersCount: MAX_USERS,
    loading: false
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users],
                nextBatchOfUsers: []
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
        case ADD_NEXT_BATCH_OF_USERS:
            return {
                ...state,
                nextBatchOfUsers: [...action.users]
            }
        default:
            return state
    }
}

export default globalReducer