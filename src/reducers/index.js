import { 
    ADD_USERS, ADD_NEXT_BATCH_OF_USERS, SET_SEED, SET_PAGE, 
    START_LOADING_USERS, FINISH_LOADING_USERS, FILTER_USERS
} from 'actions'
import { BATCH_SIZE, MAX_USERS } from 'config';

const filterUsers = (users, filterPattern) => {
    let filteredUsers
    if (filterPattern === '') {
        filteredUsers = users
    } else {
        filteredUsers = users.filter(
            user => `${user.name.first} ${user.name.last}`
                        .toLowerCase()
                        .includes(filterPattern.toLowerCase())
        )
    }
    return filteredUsers
}

const initialState = {
    nationalities: ['ch', 'es', 'fr', 'gb'],
    users: [],
    allUsers: [],
    nextBatchOfUsers: [],
    page: 0,
    maxUsersCount: MAX_USERS,
    loading: false,
    filterPattern: ''
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            const allUsers = [ ...state.allUsers, ...action.users]
            return {
                ...state,
                users: filterUsers(allUsers, state.filterPattern),
                allUsers: allUsers,
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
        case FILTER_USERS:
            const filteredUsers = filterUsers(state.allUsers, action.searchText)
            return {
                ...state,
                users: filteredUsers,
                filterPattern: action.searchText
            }
        default:
            return state
    }
}

export default globalReducer