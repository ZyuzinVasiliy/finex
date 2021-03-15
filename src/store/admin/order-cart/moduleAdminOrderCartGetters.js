/**
 *
 */

export default {

    GET_TOTAL_SUM: (state) => {
        let tmp_items = state.ITEMS;

        let total_sum = 0;
        for (let item of tmp_items) {
            total_sum += parseInt(item.sum);
        }

        return total_sum;
    },

    GET_TOTAL_COUNT: (state) => {
        let tmp_items = state.ITEMS;

        let total_count = 0;
        for (let item of tmp_items) {
            total_count += parseInt(item.sum);
        }

        return total_count;
    },

    GET_FLAG_IS_EMPTY: (state) => {
        return state.FLAG_IS_EMPTY;
    },

    GET_ITEMS: (state) => {
        return state.ITEMS;
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
                items__sorted[order_id]['items'][order_items_id] = [];
            }

            let tmp_item = items[itemKey];
            tmp_item['idx'] = parseInt(items__sorted[order_id]['items'][order_items_id].length) + 1



            items__sorted[order_id]['items'][order_items_id].push(tmp_item);
        }

        return items__sorted;
    },

    GET_SUM_BY_ORDER_ITEM: (state) => payload => {
        let original_items = JSON.parse(JSON.stringify(state.ITEMS));
        let item_sum = 0;

        for(let itemK in original_items){
            let item = original_items[itemK];

            if(item.hasOwnProperty('order_items_id')){
                if(item['order_items_id'] == payload){
                    if(item.hasOwnProperty('sum')){
                        item_sum = item['sum'];
                    }
                }
            }
        }

        return item_sum;
    },

    GET_ITEM_BY_ORDER_ITEM: (state) => payload => {
        let original_items = JSON.parse(JSON.stringify(state.ITEMS));
        let result_item = null;

        for(let itemK in original_items){
            let item = original_items[itemK];

            if(item.hasOwnProperty('order_items_id')){
                if(item['order_items_id'] == payload){
                    if(item.hasOwnProperty('sum')){
                        result_item = item;
                    }
                }
            }
        }

        return result_item;
    },

}
