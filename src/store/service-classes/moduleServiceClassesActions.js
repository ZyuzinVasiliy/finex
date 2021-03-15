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

        let response_url = urls.service_classes.GET + requestFunctions.generateQueryString(payload.queryParams);

        const response = await requestFunctions.getDataAsync(response_url);

        let responseObj = new ResponseObj(response);

        if(payload.queryParams === null || typeof payload.queryParams.fl_add === 'undefined') {
            commit('UPDATE_ITEMS', responseObj.getAttr('data').items);
        } else{
            commit('ADD_ITEMS', responseObj.getAttr('data').items);
        }

        commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination);

        return responseObj;
    },

    async FETCH_ITEM({commit}, payload = {queryParams: {}}) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.service_classes.GET_ITEM, '{id}', payload.queryParams.id);
        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);
        console.log(responseObj);
        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_ITEM', responseObj.getAttr('data').item)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #GET_ITEM_SERVICE_CLASSES';
        }

        return responseObj;
    },

    async DELETE({commit}, payload) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.service_classes.DELETE, '{id}', payload.id);

        // отправляем запрос
        const response = await requestFunctions.deleteDataAsync__json(url);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
            commit('DELETE_ITEM', payload.id)
        }  else {
            //
            responseObj.message = 'Ошибка при отправке данных #DELETE_SERVICE_CLASSES';
        }

        return responseObj;
    },

    async CREATE({commit, getters}, payload) {

        let post_data__serialized = getters['SERIALIZE_DATA'](payload);

        // отправляем запрос
        const response = await requestFunctions.postDataAsync__json(urls.service_classes.CREATE, post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #CREATE_SERVICE_CLASSES';
        }

        return responseObj;
    },

    async UPDATE({commit, getters}, payload) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.service_classes.UPDATE, '{id}', payload.id);
        let post_data__serialized = getters['SERIALIZE_DATA'](payload);

        // отправляем запрос
        const response = await requestFunctions.postDataAsync__json(url,  post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #UPDATE_SERVICE_CLASSES';
        }

        return responseObj;
    },

}
