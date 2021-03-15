/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import tokenFunctions from '@/functions/auth/tokenFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

import urls from "@/vars/urls/index";
import ResponseObj from "@/classes/ResponseObj";

export default {

    // @TODO
    async FETCH_LIST({commit}) {

        const response = await requestFunctions.getDataAsync(urls.order.GET + requestFunctions.generateQueryString());
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            commit('UPDATE_ITEMS', responseObj.getAttr('data').items)
            // commit('FILTER_ITEMS', payload)
            // commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        }
        else {
            //
            responseObj.message = 'Ошибка при получении данных ORDER_GET_LIST';
        }

        return responseObj;

    },

    // @TODO
    async FETCH_ITEM__WITH_ITEMS({commit}, payload) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.order.GET_ITEM, '{orders_id}', payload.orders_id);
        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            commit('UPDATE_ITEM__WITH_ITEMS', responseObj.getAttr('data').items)
            // commit('FILTER_ITEMS', payload)
            // commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        }
        else {
            //
            responseObj.message = 'Ошибка при получении данных ORDER_GET_LIST';
        }

        return responseObj;

    },


    // Отправка запроса на редактирование
    async CREATE_ORDER({getters}, payload){

        let post_data__serialized = [];
        for(let item_for_post of payload.items_in_cart){
            let tmp_item_for_post = getters['serializeData'](item_for_post);
            post_data__serialized.push(tmp_item_for_post);
        }

        const response = await requestFunctions.postDataAsync__json(urls.order.CREATE, post_data__serialized);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            responseObj.callbackUrl = '/services';
        }
        else {
            //
            responseObj.message = 'Ошибка при отправке данных #ORDER_CREATE_ITEM';
        }

        return responseObj;
    },


    async CHECK_SINGATURE({commit}, payload) {

        const response = await requestFunctions.postDataAsync__json(urls.order.CHECK_SINGATURE, payload);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {

            commit('UPDATE_PAYMENT_CALLBACK', responseObj.getAttr('data').item)
            commit('UPDATE_PAYMENT_CALLBACK__FLAG_ERROR', false)
            console.log('SIGNATURE OK');
        }
        else {
            //
            commit('UPDATE_PAYMENT_CALLBACK__FLAG_ERROR', true)
            responseObj.message = 'Ошибка при получении данных CHECK_SINGATURE';
        }

        return responseObj;

    },

}
