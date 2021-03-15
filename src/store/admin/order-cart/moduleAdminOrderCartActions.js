/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
// import requestFunctions from '@/functions/http/requestFunctions'
// import urls from "@/vars/urls/index";
// import ResponseObj from "@/classes/ResponseObj";
import JsonValidator from "@/functions/validators/JsonValidator";

export default {

    async INIT_CART({commit, getters}) {
        if(getters['GET_FLAG_IS_EMPTY'] === true){

            commit('SET_CART', {ls__cart: localStorage.fin_expert__order_cart});
            commit('SET_FLAG_IS_EMPTY', false);
        }
    },

    async ADD_ITEM({commit, getters}, payload) {

        // если данные еще не инициализированны, скипаем добавление
        if(getters['GET_FLAG_IS_EMPTY'] === true){
            return;
        }

        // @TODO
        //payload.item.order_item_count = 1;

        let ls__cart = localStorage.fin_expert__order_cart;
        let ls__cart__parsed = [];
        if (ls__cart !== null) {
            let json_valid = JsonValidator.IsJsonString(ls__cart);
            if (json_valid === true) {
                ls__cart__parsed = JSON.parse(ls__cart);
            }
        }

        let tmp_item = {
            'orders_id': payload.item.orders_id,
            'order_items_id': payload.item.order_items_id,
            'sum': parseInt(payload.item.sum.toString().replace(/[^0-9]+/g, "")),
        }

        // если сумма == 0, то удаляем элемент
        if(tmp_item['sum'] == 0){
            this.dispatch('admin.order_cart/REMOVE_ITEM', payload);
            return;
        }

        let flag__skip_item = false;
        let flag__need_update_storage = false;
        for (let item of ls__cart__parsed) {
            if (item.hasOwnProperty('order_items_id')) {
                if (item['order_items_id'] == tmp_item['order_items_id']) {
                    flag__skip_item = true;
                    flag__need_update_storage = true;
                    item['sum'] = tmp_item['sum'];
                }
            }
        }

        if (flag__skip_item === false) {
            ls__cart__parsed.push(tmp_item);
            localStorage.fin_expert__order_cart = JSON.stringify(ls__cart__parsed);

            commit('ADD_ITEM', tmp_item);
        }
        else if(flag__need_update_storage === true){
            localStorage.fin_expert__order_cart = JSON.stringify(ls__cart__parsed);

            commit('UPDATE_ITEM', tmp_item);
        }

    },
    async REMOVE_ITEM({commit, getters}, payload) {

        // если данные еще не инициализированны, скипаем добавление
        if(getters['GET_FLAG_IS_EMPTY'] === true){
            return;
        }

        // @TODO
        //payload.item.order_item_count = 1;

        let ls__cart = localStorage.fin_expert__order_cart;
        let ls__cart__parsed = [];
        if (ls__cart !== null) {
            let json_valid = JsonValidator.IsJsonString(ls__cart);
            if (json_valid === true) {
                ls__cart__parsed = JSON.parse(ls__cart);
            }
        }

        let tmp_item = {
            'orders_id': payload.item.orders_id,
            'order_items_id': payload.item.order_items_id,
            'sum': parseInt(payload.item.sum.toString().replace(/[^0-9]+/g, "")),
        }

        let flag__skip_item = true;
        let removed_index = null;
        for (let itemKey in ls__cart__parsed) {
            if (ls__cart__parsed[itemKey].hasOwnProperty('order_items_id')) {
                if (ls__cart__parsed[itemKey]['order_items_id'] == tmp_item['order_items_id']) {
                    removed_index = itemKey;

                    flag__skip_item = false;
                }
            }
        }

        if (flag__skip_item === false) {

            if(removed_index != null){
                ls__cart__parsed.splice(removed_index, 1);
            }

            localStorage.fin_expert__order_cart = JSON.stringify(ls__cart__parsed);

            commit('REMOVE_ITEM', payload.item);
        }
    },

    async CLEAR_CART({commit}) {
        commit('CLEAR_CART');
        localStorage.fin_expert__order_cart = JSON.stringify([]);
    }
}
