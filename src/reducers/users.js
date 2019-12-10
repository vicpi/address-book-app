import { 
    LOAD_INITIAL_USERS, ADD_USERS, ADD_NEXT_BATCH_OF_USERS,
    SET_SEED, SET_PAGE, FILTER_USERS, SELECT_USER
} from 'actions'

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
    all: [],
    filtered: [],
    nextBatch: [],
    selected: null,
    page: 0,
    filterPattern: '',
    seed: undefined
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            const all = [ ...state.all, ...action.users]
            return {
                ...state,
                filtered: filterUsers(all, state.filterPattern),
                all: all,
                nextBatch: []
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
        case ADD_NEXT_BATCH_OF_USERS:
            return {
                ...state,
                nextBatch: [...action.users]
            }
        case FILTER_USERS:
            const filteredUsers = filterUsers(state.all, action.searchText)
            return {
                ...state,
                filtered: filteredUsers,
                filterPattern: action.searchText
            }
        case LOAD_INITIAL_USERS:
            return {
                ...state,
                filtered: [],
                all: [],
                nextBatch: [],
                seed: undefined
            }
        case SELECT_USER:
            const selected = action.uuid !== null
                ? state.all.find(
                    user => user.login.uuid === action.uuid
                )
                : null
            return {
                ...state,
                selected
            }
        default:
            return state
    }
}

export default usersReducer