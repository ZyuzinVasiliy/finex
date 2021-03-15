/**
 *
 */

const keyId = 'services_id'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },
  GET_PAGINATION: (state) => {
    return state.PAGINATION;
  },
  getCategories: (state) => {
    return state.CATEGORIES;
  },
  getDefaultFields: (state) => {
    return state.DEFAULT_FIELDS;
  },

  GET_ITEM_BY_ID: (state) => payload => {
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
  SERIALIZE_DATA: (state) => payload => {
    let result = {};

    for(let itemKey in state.ITEM_SERIALIZER){
      if(payload.hasOwnProperty(itemKey)){
        result[state.ITEM_SERIALIZER[itemKey]] = payload[itemKey];
      }
    }

    return result;
  },
}
