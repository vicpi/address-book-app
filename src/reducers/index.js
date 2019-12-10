import { combineReducers } from 'redux'
import usersReducer from './users'
import settingsReducer from './settings'
import loadingReducer from './loading'

const globalReducer = combineReducers({
    users: usersReducer,
    settings: settingsReducer,
    loading: loadingReducer
})

export default globalReducer