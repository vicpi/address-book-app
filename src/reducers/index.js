import { ADD_USERS } from 'actions/index.js'

const initialState = {
    users: []
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            console.log('reducer', action.users);
            
            return {
                users: [ ...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default globalReducer