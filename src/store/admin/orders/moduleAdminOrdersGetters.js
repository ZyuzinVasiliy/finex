/**
 *
 */

const keyId = 'services_id'

export default {

  GET_ORDER_STATUS: (state) => payload => {
    let result = null;

    if(state.ORDER_STATUS.hasOwnProperty(payload)){
      result = state.ORDER_STATUS[payload];
    }

    return result;
  },
  CHECK_ORDER_STATUS_IS_PAYED: (state) => payload => {
    let result = false;

    if(state.ORDER_STATUS_PAYED.indexOf(payload) !== -1){
      result = true;
    }

    return result;
  },
  CHECK_ORDER_STATUS_IS_PRE_PAYED: (state) => payload => {
    let result = false;

    if(state.ORDER_STATUS_PRE_PAYED.indexOf(payload) !== -1){
      result = true;
    }

    return result;
  },
  CHECK_PAYMENT_BILL_STATUS_IS_PAYED: (state) => payload => {
    let result = false;

    if(state.PAYMENT_BILL_STATUS_PAYED.indexOf(payload) !== -1){
      result = true;
    }

    return result;
  },
  CHECK_ORDER_ITEM_STATUS_IS_PAYED: (state) => payload => {
    let result = false;

    if(state.ORDER_ITEM_STATUS_PAYED.indexOf(payload) !== -1){
      result = true;
    }

    return result;
  },

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },

  GET_PAGINATION: (state) => {
    return state.PAGINATION;
  },

  GET_ITEMS__GROUPED: (state) => {
    let items = JSON.parse(JSON.stringify(state.ITEMS));

    let items__sorted = {};
    for(let itemKey in items){

      let order_id = items[itemKey]['orders_id'];
      let order_items_id = items[itemKey]['order_items_id'];

      if(!items__sorted.hasOwnProperty(order_id)){
        items__sorted[order_id] = {
          items: {},
          first_item: items[itemKey]
        };
      }

      if(!items__sorted[order_id]['items'].hasOwnProperty(order_items_id)){
        items__sorted[order_id]['items'][order_items_id] = {
          order_item: items[itemKey],
          payment_bill_items: [],
        };
      }

      items__sorted[order_id]['items'][order_items_id]['payment_bill_items'].push(items[itemKey]);
    }

    // сортировка в нужном порядке
    const keysSorted = Object.keys(items__sorted).sort(function(a,b){return b-a})
    const ordered = {};
    for (let i=0; i<keysSorted.length;i++) {
      ordered[i] = items__sorted[keysSorted[i]];
    }
    items__sorted = ordered;


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
