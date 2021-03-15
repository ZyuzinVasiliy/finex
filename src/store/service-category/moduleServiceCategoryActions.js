/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import tokenFunctions from '@/functions/auth/tokenFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

import urls from "@/vars/urls/index";
import ResponseObj from "@/classes/ResponseObj";

export default {

    // @TODO
    async FETCH_LIST({commit}, payload = {queryParams: null}) {

        const response = await requestFunctions.getDataAsync(urls.service_category.GET + requestFunctions.generateQueryString(payload.queryParams));
        let responseObj = new ResponseObj(response);

        commit('UPDATE_ITEMS', responseObj.getAttr('data').items);

        return responseObj;
    },

    async FETCH_ITEM({commit}, payload) {
        let url = requestFunctions.replacePlaceholderQueryString(urls.service_category.GET_ITEM, '{id}', payload.id);
        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            commit('UPDATE_ITEM', responseObj.getAttr('data').item)

            // commit('FILTER_ITEMS', payload)
            // commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        }
        else {
            //
            responseObj.message = 'Ошибка при получении данных #GET_ITEM_SERVICE_CATEGORY';
        }

        return responseObj;
    },

    async DELETE({commit}, payload) {
        let url = requestFunctions.replacePlaceholderQueryString(urls.service_category.DELETE, '{id}', payload.id);
        // отправляем запрос
        const response = await requestFunctions.deleteDataAsync__json(url);
        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {

            //
            console.log('OK');
            commit('DELETE_ITEM', payload.id)

        }
        else {
            //
            responseObj.message = 'Ошибка при отправке данных #DELETE_SERVICE_CATEGORY';
        }

        return responseObj;
    },

    async CREATE({commit, getters}, payload) {
        let post_data__serialized = getters['SERIALIZE_DATA'](payload);
        // отправляем запрос
        const response = await requestFunctions.postDataAsync__json(urls.service_category.CREATE, post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {

            //
            console.log('OK');

        }
        else {
            //
            responseObj.message = 'Ошибка при отправке данных #CREATE_SERVICE_CATEGORY';
        }

        return responseObj;
    },

    async UPDATE({commit, getters}, payload) {
        let url = requestFunctions.replacePlaceholderQueryString(urls.service_category.UPDATE, '{id}', payload.id);
        let post_data__serialized = getters['SERIALIZE_DATA'](payload);
        // отправляем запрос
        const response = await requestFunctions.postDataAsync__json(url,  post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {

            //
            console.log('OK');

        }
        else {
            //
            responseObj.message = 'Ошибка при отправке данных #UPDATE_SERVICE_CATEGORY';
        }

        return responseObj;
    },

}
