

const DEFAULT_LANGUAGE = 'tr'

const NAVBAR_LIST = ['protected']

const HEADERS = {
    AUTHORIZATION: 'authorization',
    LANGUAGE: 'language',
    DEVICE: 'device-id',
}

const COOKIES = {
    AUTHORIZATION: 'authorization',
    LANGUAGE: 'language',
    DEVICE: 'device-id',
};

const ROUTES = {
    DEFAULT: '/',
    PROTECTED: '/protected',
    PUBLIC: '/public',
    DASHBOARD: '/dashboard',
}

/**
 * #TODO 
 * Add public url which won't have token in header when you send a request.
 *   */
const PUBLIC_URL_LIST = [
    '/login'
]

const RESPONSE_STATUSES = {
    success: "Success",
    fail: "Fail"
}

const UNKNOWN_ERROR = {
    tr: "Bilinmeyen bir hata oluştu.",
    en: "An unknown error has occurred."
}

export {
    DEFAULT_LANGUAGE,
    HEADERS,
    COOKIES,
    ROUTES,
    RESPONSE_STATUSES,
    UNKNOWN_ERROR,
    PUBLIC_URL_LIST,
    NAVBAR_LIST
}