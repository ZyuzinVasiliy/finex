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
