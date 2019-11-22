import axios from 'axios'
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
    console.log('url', url);
    return url
}

const delay = (ms) => {
    return new Promise(resolve => 
        setTimeout(resolve, ms)
    )
}

/**
 * Wrapper around axios.get method in order to simulate slow network connection
 * @param {String} url URL
 */
export const httpGet = async (url) => {
    await delay(2000)
    let response
    try {
        response = await axios.get(url)
    } catch (err) {
        console.log('HTTP Request Error: ', err, err.stack)
    }
    return response
}