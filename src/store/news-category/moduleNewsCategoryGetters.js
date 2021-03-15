/**
 *
 */

const keyId = 'id'
const keyName = 'name'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },
  getPagination: (state) => {
    return state.PAGINATION;
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

  GET_ITEMS__FOR_OPTIONS: (state) => {
    let options = [];

    let order_ids = [];
    for(let itemKey in state.ITEMS){

      if(order_ids.indexOf(state.ITEMS[itemKey][keyId]) < 0){
        order_ids.push(state.ITEMS[itemKey][keyId]);

        options.push({
          value: state.ITEMS[itemKey][keyId],
          label: state.ITEMS[itemKey][keyName],
        })
      }
    }

    return options;
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
