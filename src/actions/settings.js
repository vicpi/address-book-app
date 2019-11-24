export const UPDATE_NATIONALITY_SETTINGS = 'UPDATE_NATIONALITY_SETTINGS'
export const SET_NATIONALITY_SETTINGS = 'SET_NATIONALITY_SETTINGS'

export const updateNationalitySettings = (nationalityName, nationalityLabel, checked) => {
    return {
        type: UPDATE_NATIONALITY_SETTINGS,
        nationalityName,
        nationalityLabel,
        checked
    }
}

export const setNationalitySettings = (nationalityName, nationalityLabel, checked) => {
    return {
        type: SET_NATIONALITY_SETTINGS,
        nationalityName,
        nationalityLabel,
        checked
    }
}
