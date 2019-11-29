import axios from 'axios'

/**
 * Simulates delay
 * 
 * @param {Number} ms Delay in milliseconds
 * @returns {Promise}
 */
const delay = (ms) => {
    return new Promise(resolve => 
        setTimeout(resolve, ms)
    )
}

/**
 * Wrapper around axios.get method in order to simulate slow network connection
 * 
 * @param {String} url URL
 * @returns {Response} response - Response object
 */
const get = async (url) => {
    await delay(2000)
    let response
    try {
        response = await axios.get(url)
    } catch (err) {
        console.log('HTTP Request Error: ', err, err.stack)
    }
    return response
}

export default {
    get
}