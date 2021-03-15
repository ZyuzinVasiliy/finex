const GET = '/api/v1/news'
const GET_ITEM = '/api/v1/news/{id}'
const USERS_GET = '/api/v1/usersnews'
const USERS_GET_ITEM = '/api/v1/usersnews/{id}'
const CREATE = '/api/v1/usersnews/create'
const UPDATE = '/api/v1/usersnews/update/{id}'
const DELETE = '/api/v1/usersnews/{id}'
const ADD_IMAGE = '/api/v1/usersnews/add-images'
const DELETE_IMAGE = '/api/v1/usersnews/delete-image'

export default {
  GET,
  GET_ITEM,
  CREATE,
  UPDATE,
  DELETE,
  ADD_IMAGE,
  DELETE_IMAGE,
  USERS_GET,
  USERS_GET_ITEM
}
