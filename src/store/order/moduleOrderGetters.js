/**
 *
 */

const keyId = 'orders_id'
const keyName1 = 'orders_number'
const keyName2 = 'orders_created_at'
const keyName3 = 'orders_total_sum'

//
import dateHelper from '@/functions/helpers/dateHelper'
import moneyHelper from '@/functions/helpers/moneyHelper'

export default {

  GET_ITEMS: (state) => {
    return state.ITEMS;
  },
  GET_ITEM__WITH_ITEMS: (state) => {
    return state.ITEM__WITH_ITEMS;
  },
  getPagination: (state) => {
    return state.PAGINATION;
  },

  GET_ITEMS__FOR_OPTIONS: (state) => {
    let options = [];

    let order_ids = [];
    for(let itemKey in state.ITEMS){

      if(order_ids.indexOf(state.ITEMS[itemKey][keyId]) < 0){
        order_ids.push(state.ITEMS[itemKey][keyId]);

        let parsed_date = dateHelper.formatDate(state.ITEMS[itemKey][keyName2]);
        let parsed_total_sum = moneyHelper.preparePrice(state.ITEMS[itemKey][keyName3])

        options.push({
          value: state.ITEMS[itemKey][keyId],
          label: 'Заказ №' +state.ITEMS[itemKey][keyName1]+ ' на ' + parsed_total_sum+ 'руб.' + ' от ' +parsed_date,
        })
      }
    }

    return options;
  },

  GET_ITEMS__GROUPED: (state) => {
    let items = JSON.parse(JSON.stringify(state.ITEMS));

    let items__sorted = {};
    for(let itemKey in items){
      if(!items__sorted.hasOwnProperty(items[itemKey][keyId])){
        items__sorted[items[itemKey][keyId]] = {
          all_items: [],
          items: [],
          first_item: items[itemKey]
        };
      }
      else{
        items__sorted[items[itemKey][keyId]].items.push(items[itemKey]);
      }

      items__sorted[items[itemKey][keyId]].all_items.push(items[itemKey]);
    }

    return items__sorted;
  },
  GET_ITEM__WITH_ITEMS__GROUPED: (state) => {
    let items = JSON.parse(JSON.stringify(state.ITEM__WITH_ITEMS));

    let items__sorted = {
      all_items: [],
      items: [],
      first_item: null,
      total_sum: 0
    };

    for(let itemKey in items){
      let tmp_item = items[itemKey];

      let parsed_date = dateHelper.formatDate(items[itemKey][keyName2]);
      let parsed_total_sum = moneyHelper.preparePrice(items[itemKey][keyName3])
      tmp_item['order_name'] = 'Заказ №' +items[itemKey][keyName1]+ ' на ' + parsed_total_sum+ 'руб.' + ' от ' +parsed_date;

      if(items__sorted['first_item'] === null){
        items__sorted['first_item'] = tmp_item;
      }
      else{
        items__sorted.items.push(tmp_item);
      }

      items__sorted.total_sum += parseInt(tmp_item['order_items_total_sum_by_item']);

      items__sorted.all_items.push(tmp_item);
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
