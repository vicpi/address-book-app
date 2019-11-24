import { 
    LOAD_INITIAL_USERS, ADD_USERS, ADD_NEXT_BATCH_OF_USERS, SET_SEED, SET_PAGE, 
    START_LOADING_USERS, FINISH_LOADING_USERS, FILTER_USERS, SELECT_USER
} from 'actions'
import { SET_NATIONALITY_SETTINGS } from 'actions/settings'
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
    nationalities: {
        ch: {
            name: 'ch',
            label: 'CH',
            enabled: true
        },
        es: {
            name: 'es',
            label: 'ES',
            enabled: true
        },
        fr: {
            name: 'fr',
            label: 'FR',
            enabled: true
        },
        gb: {
            name: 'gb',
            label: 'GB',
            enabled: true
        }
    },
    users: [],
    allUsers: [],
    nextBatchOfUsers: [],
    selectedUser: null,
    page: 0,
    batchSize: BATCH_SIZE,
    maxCatalogLength: MAX_USERS,
    loading: false,
    filterPattern: '',
    seed: undefined
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
        case SET_NATIONALITY_SETTINGS:
            return {
                ...state,
                nationalities: {
                    ...state.nationalities,
                    [action.nationalityName]: {
                        name: action.nationalityName,
                        label: action.nationalityLabel,
                        enabled: action.checked
                    }
                }
            }
        case LOAD_INITIAL_USERS:
            return {
                ...state,
                users: [],
                allUsers: [],
                nextBatchOfUsers: [],
                seed: undefined
            }
        case SELECT_USER:
            const selectedUser = action.uuid !== null
                ? state.allUsers.find(
                    user => user.login.uuid === action.uuid
                )
                : null
            return {
                ...state,
                selectedUser
            }
        default:
            return state
    }
}

export default globalReducer