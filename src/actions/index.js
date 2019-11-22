export const ADD_USERS = 'ADD_USERS'
export const LOAD_INITIAL_USERS = 'LOAD_INITIAL_USERS'
export const SCROLL_AT_THE_BOTTOM_OF_THE_PAGE = 'SCROLL_AT_THE_BOTTOM_OF_THE_PAGE'

export const addUsers = (users) => {
    return {
        type: ADD_USERS,
        users
    }
}

export const loadInitialUsers = () => {
    return {
        type: LOAD_INITIAL_USERS
    }
}

export const scrollAtTheBottomOfThePage = () => {
    return {
        type: SCROLL_AT_THE_BOTTOM_OF_THE_PAGE
    }
}