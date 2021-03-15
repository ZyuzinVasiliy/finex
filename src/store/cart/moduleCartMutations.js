/**
 *
 */
import JsonValidator from "@/functions/validators/JsonValidator";

export default {

    SET_CART(state, payload) {

        let ls__cart = payload.ls__cart;
        let ls__cart__parsed = [];
        if (ls__cart !== null) {
            if (JsonValidator.IsJsonString(ls__cart) === true) {
                ls__cart__parsed = JSON.parse(ls__cart);
            }
        }

        let service_list = payload.service_list;
        for(let item_in_cart of ls__cart__parsed){
            for(let item_service of service_list){

                if (item_in_cart.hasOwnProperty('services_id') && item_service.hasOwnProperty('services_id')) {
                    if (item_in_cart['services_id'] == item_service['services_id']) {
                        let tmp_item = item_service;
                        tmp_item.order_item_count = item_in_cart.order_item_count
                        state.ITEMS.push(tmp_item)
                    }
                }
            }
        }

    },

    ADD_ITEM(state, payload) {
        state.ITEMS.push(payload);
    },

    UPDATE_ITEM(state, payload) {
        let original_items = JSON.parse(JSON.stringify(state.ITEMS));

        for(let item_key in original_items){
            if(original_items[item_key]['services_id'] === payload['services_id']){
                original_items[item_key]['order_item_count'] = payload['order_item_count'];
            }
        }
        state.ITEMS = original_items;
    },
    REMOVE_ITEM(state, removed_item) {

        let removed_index = null;
        let changed_index = null;
        for(let itemKey in state.ITEMS){
            if (removed_item.hasOwnProperty('services_id') && state.ITEMS[itemKey].hasOwnProperty('services_id')) {
                if (removed_item['services_id'] == state.ITEMS[itemKey]['services_id']) {
                    if( (state.ITEMS[itemKey]['order_item_count'] - removed_item['order_item_count']) <= 0){
                        removed_index = itemKey;
                    }
                    else{
                        changed_index = itemKey;
                    }
                }
            }
        }

        if(removed_index != null){
            state.ITEMS.splice(removed_index, 1);
        }

        if(changed_index != null){
            state.ITEMS[changed_index]['order_item_count'] = parseInt(state.ITEMS[changed_index]['order_item_count'] - removed_item['order_item_count']);
        }
    },

    CLEAR_CART(state) {
        state.ITEMS = [];
    },

    SET_FLAG_IS_EMPTY(state, payload) {
        state.FLAG_IS_EMPTY = payload;
    },
}

