
import baseAxios from 'axios'
import { COOKIES, HEADERS, PUBLIC_URL_LIST, RESPONSE_STATUSES, ROUTES, UNKNOWN_ERROR } from '../utils/constants'
import cookie from 'react-cookies'
import { showError, showSuccess } from '../redux/snackbar';
import store from '../redux/store';
import { setLoading } from '../redux/loading';
import { setupCache } from 'axios-cache-interceptor';

const API_URL = process.env.REACT_APP_API_URL

//Creates axios with configuration
const axios = setupCache(baseAxios.create({
    baseURL: API_URL
}), {
    ttl: 3 * 60 * 1000, // Three minutes #TODO change this to 0 then it won't cache anything or send {cache:false} inside axios request options
    generateKey: req => req.url + JSON.stringify(req.params),
});

//Clears cache for specific url/s
const clearCache = async (config) => {
    //Find url list to clear
    let clearList = []

    // Checks if urlsToClear is an array
    if (Array.isArray(config.urlsToClear)) {
        config.urlsToClear.map(clearUrl => {
            Object.keys(axios.storage.data).map(url => url.startsWith(clearUrl) && clearList.push(url))
        })
    } else {
        //#TODO if you send urlsToClear as clearAllCache it will clear every single cache
        if (config.urlsToClear === 'clearAllCache') {
            Object.keys(axios.storage.data).map(url => clearList.push(url))
        } else {
            Object.keys(axios.storage.data).map(url => url.startsWith(config.urlsToClear) && clearList.push(url))
        }
    }
    //Clears the cache
    clearList.map(async (url) => await axios.storage.remove(url))

}

// Adds token as default header. If you wanna add other headers add it in function
const handleRequest = async (config) => {
    //Clear cache if needed
    if (config.urlsToClear) {
        await clearCache(config)
    }

    //Shows linear progress bar whenever you send a request
    store.dispatch(setLoading(true))

    //#TODO if you need to use AUTHORIZATION token you must change isEveryUrlPublic to false or delete if check part.
    const isEveryUrlPublic = true
    if (isEveryUrlPublic) {
        return config
    } else {
        if (PUBLIC_URL_LIST.some(url => url === config.url)) return config

        let token = cookie.load(COOKIES.AUTHORIZATION)
        if (!token) {
            window.location.replace(`${ROUTES.INDEX}`);
            return
        }
        config.headers[HEADERS.AUTHORIZATION] = token
        return config
    }
}

const handleResponse = (res) => {
    //#TODO you must get status from backend inside the response
    if (res.data.status === RESPONSE_STATUSES.success) {
        //#TODO if you want to show a success snackbar send a success.message from backend inside the response
        if (res.data.success) {
            store.dispatch(showSuccess({ message: res.data.success.message }));
        }
    }
    if (res.data.status === RESPONSE_STATUSES.fail) {
        //#TODO error code 1000 for AUTHORIZATION fail. It will remove the Auth token from cookie and it will send you to index page
        if (res.data.error.code === 1000) {
            cookie.remove(COOKIES.AUTHORIZATION)
            window.location.replace(`${ROUTES.INDEX}`)
        }
        //#TODO if you want to show a error snackbar send a error.message from backend inside the response
        store.dispatch(showError({ message: res.data.error.message }));
    }
    //Hides linear progress bar whenever you get a response
    store.dispatch(setLoading(false))
    return res
}

const handleError = (err) => {
    if (err.code === 'ECONNABORTED') {
        console.log(err)
    }
    else {
        setTimeout(() => store.dispatch(setLoading(false)), 1000)
        //Shows unknown error
        store.dispatch(showError({ message: UNKNOWN_ERROR.tr }));
    }
}

axios.interceptors.request.use(handleRequest)
axios.interceptors.response.use(handleResponse, handleError)

export default axios