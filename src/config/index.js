
/// CUSTOM PARAM

/// флаг указывающий на какой BACKEND отправлять запросы
// DEV = true
// PROD = false
const DEVELOPMENT_MODE = false;

/// поддомен
// ПУБЛИЧНЫЙ РАЗДЕЛ = PUBLIC
// АДМИНСКИЙ_РАЗДЕЛ = ADMIN
// ПОЛЬЗОВАТЕЛЬСКИЙ_РАЗДЕЛ = MEMBER
const SUBDOMAIN = 'PUBLIC'

// localhost:8080
const DOMAIN    = 'localhost:8080'

// http://localhost:8080
const MEMBERDOMAIN = 'http://localhost:8080'

///
const VERSION_NUMBER = '2.0'

/// COMBINE PARAMS
const DEV_PARAMS = {
    BACKEND_IS_DEVELOPMENT: true,
    SUBDOMAIN: SUBDOMAIN,
    DOMAIN: DOMAIN,
    MEMBERDOMAIN: MEMBERDOMAIN,
    VERSION_NUMBER: VERSION_NUMBER,
}
const PROD_PARAMS = {
    BACKEND_IS_DEVELOPMENT: false,
    SUBDOMAIN: SUBDOMAIN,
    DOMAIN: DOMAIN,
    MEMBERDOMAIN: MEMBERDOMAIN,
    VERSION_NUMBER: VERSION_NUMBER,
}

// создаем глобальную переменную
const CUSTOM_PARAMS = (DEVELOPMENT_MODE === true) ? DEV_PARAMS : PROD_PARAMS;

export default {
    PARAMS: CUSTOM_PARAMS
}
