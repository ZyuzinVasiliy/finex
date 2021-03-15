/**
 *
 */

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },

  GET_PAGINATION: (state) => {
    return state.PAGINATION;
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
