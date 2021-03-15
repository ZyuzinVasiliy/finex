/**
 *
 */

const keyId = 'requests_id'
const keyUserId = 'users_id'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },
  getPagination: (state) => {
    return state.PAGINATION;
  },

  GET_ITEMS__GROUPED_BY_USER: (state) => {
    let items = JSON.parse(JSON.stringify(state.ITEMS));

    let items__sorted = {};
    let last_user_id = null;
    let grouped_idx = 0;
    for(let itemKey in items){

      if(items[itemKey].hasOwnProperty(keyUserId)){

        if(last_user_id != items[itemKey][keyUserId]){
          last_user_id = items[itemKey][keyUserId];
        }
        grouped_idx++;

        if(!items__sorted.hasOwnProperty(grouped_idx)){
          items__sorted[grouped_idx] = []
        }

        items__sorted[grouped_idx].push(items[itemKey]);
      }

    }

    return items__sorted;
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

  getItem: (state) => {
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
