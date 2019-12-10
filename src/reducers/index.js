import usersReducer from './users'
import settingsReducer from './settings'
import loadingReducer from './loading'

const globalReducer = (state = {}, action) => {
    return {
        users: usersReducer(state.users, action),
        settings: settingsReducer(state.settings, action),
        loading: loadingReducer(state.loading, action)
    }
}

export default globalReducer