import { API_URL, BATCH_SIZE } from 'config'

export const makeUsersUrl = (nationalities, seed, page) => {
    const queryParams = {
        nat: nationalities.join(','),
        results: BATCH_SIZE,
        inc: [ 
            'name', 'location', 'nat', 'email', 'picture', 'phone', 'cell', 'login'
        ].join(',')
    }
    if (seed !== undefined) {
        queryParams.seed = seed
    }
    if (page !== undefined) {
        queryParams.page = page
    }
    const queryString = '?' + Object.keys(queryParams)
        .map(key => `${key}=${queryParams[key]}`)
        .join('&')
    const url = `${API_URL}${queryString}`
    return url
}
