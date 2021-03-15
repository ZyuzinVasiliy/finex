/**
 *
 */

const keyId = 'requests_id'
const keyName = 'requests_subject'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },
  getPagination: (state) => {
    return state.PAGINATION;
  },

  getItemById: (state) => payload => {
    let result = null;

    for(let item of state.ITEMS){
      if(item.hasOwnProperty(keyId)){
        if(item[keyId] === payload){
          result = item
        }
      }
    }

    return result;
  },

  GET_ITEM: (state) => {
    return state.ITEM;
  },

  GET_ITEM_STATUS: (state) => {
    let result = null;

    if(state.ITEM.hasOwnProperty('requests_statuses_code')){
      result = state.ITEM['requests_statuses_code']
    }

    return result;
  },

  GET_ITEM_STATUS_EDIT_DISABLE: (state) => {
    let result = true;

    if(state.ITEM.hasOwnProperty('requests_statuses_code')){
      if(state.ITEM['requests_statuses_code'] === "NEW" || state.ITEM['requests_statuses_code'] === "CONSIDERATION"){
        result = false
      }
    }

    return result;
  },


  // SERIALIZER
  serializeData: (state) => payload => {
    let result = {};

    for(let itemKey in state.ITEM_SERIALIZER){
      if(payload.hasOwnProperty(itemKey)){
        result[state.ITEM_SERIALIZER[itemKey]] = payload[itemKey];
      }
    }

    return result;
  },
}
