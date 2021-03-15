const GET = '/api/v1/users'
const GET_ITEM = '/api/v1/users/{user_id}'

const UPDATE = '/api/v1/users/update/{user_id}'
const UPLOAD_IMAGE = '/api/v1/users/upload-image/{user_id}'
const DELETE_IMAGE = '/api/v1/users/delete-image/{user_id}'
const DEL = '/api/v1/users'
const ACTIVATION = '/api/v1/users/activate/{user_id}'

export default {

    GET,
    GET_ITEM,

    UPDATE,
    UPLOAD_IMAGE,
    DELETE_IMAGE,

    DEL,
    ACTIVATION,
}
