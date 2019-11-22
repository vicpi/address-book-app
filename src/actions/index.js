export const ADD_USERS = 'ADD_USERS'
export const SET_SEED = 'SET_SEED'
export const SET_PAGE = 'SET_PAGE'
export const LOAD_INITIAL_USERS = 'LOAD_INITIAL_USERS'
export const SCROLL_AT_THE_BOTTOM_OF_THE_PAGE = 'SCROLL_AT_THE_BOTTOM_OF_THE_PAGE'
export const START_LOADING_USERS = 'START_LOADING_USERS'
export const FINISH_LOADING_USERS = 'FINISH_LOADING_USERS'

export const addUsers = (users) => {
    return {
        type: ADD_USERS,
        users
    }
}

export const setSeed = (seed) => {
    return {
        type: SET_SEED,
        seed
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
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

export const startLoadingUsers = () => {
    return {
        type: START_LOADING_USERS
    }
}

export const finishLoadingUsers = () => {
    return {
        type: FINISH_LOADING_USERS
    }
}