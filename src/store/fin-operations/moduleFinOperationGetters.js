/**
 *
 */

const keyId = 'services_id'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },

  GET_ITEMS__GROUPED: (state) => {
    let items = JSON.parse(JSON.stringify(state.ITEMS));

    let items__sorted = {};
    for(let itemKey in items){
      if(!items__sorted.hasOwnProperty(items[itemKey]['payment_bills_id'])){
        items__sorted[items[itemKey]['payment_bills_id']] = {
          all_items: [],
          items: [],
          first_item: items[itemKey]
        };
      }
      else{
        items__sorted[items[itemKey]['payment_bills_id']].items.push(items[itemKey]);
      }

      items__sorted[items[itemKey]['payment_bills_id']].all_items.push(items[itemKey]);
    }

    return items__sorted;
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

  getItem: (state) => {
    return state.ITEM;
  },

  getPaymentCallback: (state) => {
    return state.PAYMENT_CALLBACK;
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
