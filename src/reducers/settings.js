import { SET_NATIONALITY_SETTINGS } from 'actions/settings'
import { BATCH_SIZE, MAX_USERS } from 'config';

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
    batchSize: BATCH_SIZE,
    maxCatalogLength: MAX_USERS,
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export default settingsReducer