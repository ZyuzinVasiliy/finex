/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
// import requestFunctions from '@/functions/http/requestFunctions'
// import urls from "@/vars/urls/index";
// import ResponseObj from "@/classes/ResponseObj";
import JsonValidator from "@/functions/validators/JsonValidator";

export default {

    async INIT_CART({commit, getters}, payload) {

        if(getters['GET_FLAG_IS_EMPTY'] === true){

            commit('SET_CART', {service_list: payload, ls__cart: localStorage.fin_expert__cart});
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

        let ls__cart = localStorage.fin_expert__cart;
        let ls__cart__parsed = [];
        if (ls__cart !== null) {
            let json_valid = JsonValidator.IsJsonString(ls__cart);
            if (json_valid === true) {
                ls__cart__parsed = JSON.parse(ls__cart);
            }
        }

        let tmp_item = {
            'services_id': payload.item.services_id,
            'order_item_count': payload.item.order_item_count,
        }

        let flag__skip_item = false;
        let flag__need_update_storage = false;
        for (let item of ls__cart__parsed) {
            if (item.hasOwnProperty('services_id')) {
                if (item['services_id'] == tmp_item['services_id']) {
                    flag__skip_item = true;
                    flag__need_update_storage = true;
                    item['order_item_count'] = tmp_item['order_item_count'];
                }
            }
        }

        if (flag__skip_item === false) {
            ls__cart__parsed.push(tmp_item);
            localStorage.fin_expert__cart = JSON.stringify(ls__cart__parsed);

            commit('ADD_ITEM', payload.item);
        }
        else if(flag__need_update_storage === true){
            localStorage.fin_expert__cart = JSON.stringify(ls__cart__parsed);

            commit('UPDATE_ITEM', payload.item);
        }

    },
    async REMOVE_ITEM({commit, getters}, payload) {

        // если данные еще не инициализированны, скипаем добавление
        if(getters['GET_FLAG_IS_EMPTY'] === true){
            return;
        }

        // @TODO
        //payload.item.order_item_count = 1;

        let ls__cart = localStorage.fin_expert__cart;
        let ls__cart__parsed = [];
        if (ls__cart !== null) {
            let json_valid = JsonValidator.IsJsonString(ls__cart);
            if (json_valid === true) {
                ls__cart__parsed = JSON.parse(ls__cart);
            }
        }

        let tmp_item = {
            'services_id': payload.item.services_id,
            'order_item_count': payload.item.order_item_count,
        }

        let flag__skip_item = true;
        let removed_index = null;
        let changed_index = null;
        for (let itemKey in ls__cart__parsed) {
            if (ls__cart__parsed[itemKey].hasOwnProperty('services_id')) {
                if (ls__cart__parsed[itemKey]['services_id'] == tmp_item['services_id']) {
                    if( (ls__cart__parsed[itemKey]['order_item_count'] - tmp_item['order_item_count']) <= 0){
                        removed_index = itemKey;
                    }
                    else{
                        changed_index = itemKey;
                    }

                    flag__skip_item = false;
                }
            }
        }

        if (flag__skip_item === false) {

            if(removed_index != null){
                ls__cart__parsed.splice(removed_index, 1);
            }

            if(changed_index != null){
                ls__cart__parsed[changed_index]['order_item_count'] = parseInt(ls__cart__parsed[changed_index]['order_item_count']) - parseInt(tmp_item['order_item_count']);
            }

            localStorage.fin_expert__cart = JSON.stringify(ls__cart__parsed);

            commit('REMOVE_ITEM', payload.item);
        }
    },

    async CLEAR_CART({commit}) {
        commit('CLEAR_CART');
        localStorage.fin_expert__cart = JSON.stringify([]);
    }
}
