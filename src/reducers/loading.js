import { 
    START_LOADING_USERS, FINISH_LOADING_USERS
} from 'actions'

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case START_LOADING_USERS:
            return true
        case FINISH_LOADING_USERS:
            return false
        default:
            return state
    }
}

export default loadingReducer