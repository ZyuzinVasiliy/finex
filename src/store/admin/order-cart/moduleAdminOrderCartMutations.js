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

        for(let item_in_cart of ls__cart__parsed){
            if (item_in_cart.hasOwnProperty('order_items_id')) {
                state.ITEMS.push(item_in_cart)
            }
        }

    },

    ADD_ITEM(state, payload) {

        console.log('==========payload===========');
        console.log(payload)

        state.ITEMS.push(payload);
    },

    UPDATE_ITEM(state, payload) {
        let original_items = JSON.parse(JSON.stringify(state.ITEMS));

        for(let item_key in original_items){
            if(original_items[item_key]['order_items_id'] === payload['order_items_id']){
                original_items[item_key]['sum'] = payload['sum'].replace(/[^0-9]+/g, "");
            }
        }
        state.ITEMS = original_items;
    },
    REMOVE_ITEM(state, removed_item) {

        let removed_index = null;
        for(let itemKey in state.ITEMS){
            if (removed_item.hasOwnProperty('order_items_id') && state.ITEMS[itemKey].hasOwnProperty('order_items_id')) {
                if (removed_item['order_items_id'] == state.ITEMS[itemKey]['order_items_id']) {
                    removed_index = itemKey;
                }
            }
        }

        if(removed_index != null){
            state.ITEMS.splice(removed_index, 1);
        }
    },

    CLEAR_CART(state) {
        state.ITEMS = [];
    },

    SET_FLAG_IS_EMPTY(state, payload) {
        state.FLAG_IS_EMPTY = payload;
    },
}

