/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import tokenFunctions from '@/functions/auth/tokenFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

import urls from "@/vars/urls/index";
import ResponseObj from "@/classes/ResponseObj";

export default {

    async FETCH_CATEGORIES({commit}) {

        const response = await requestFunctions.getDataAsync(urls.service.GET_CATEGORIES);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_CATEGORIES', responseObj.getAttr('data').items)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #SERVICE_GET_LIST';
        }

        return responseObj;
    },

    // @TODO
    async FETCH_LIST({commit}, payload = {queryParams: null}) {

        let url = '';

        if(payload.queryParams.type == 'users'){
            url = urls.service.USERS_GET + requestFunctions.generateQueryString(payload.queryParams);
        } else {
            url = urls.service.GET + requestFunctions.generateQueryString(payload.queryParams);
        }

        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        console.log(responseObj);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_ITEMS', responseObj.getAttr('data').items)
            commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #SERVICE_GET_LIST';
        }

        return responseObj;
    },

    async FETCH_POPULAR_LIST({commit}, payload = {queryParams: null}) {

        let url = urls.service.GET_POPULAR + requestFunctions.generateQueryString(payload.queryParams);
        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_ITEMS', responseObj.getAttr('data').items)
            commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #SERVICE_GET_POPULAR_LIST';
        }

        return responseObj;
    },

    async FETCH_ITEM({commit}, payload) {

        const response = await requestFunctions.getDataAsync(urls.service.GET + '/' + payload);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            commit('UPDATE_ITEM', responseObj.getAttr('data').item)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #SERVICE_GET_LIST';
        }

        return responseObj;
    },

    async DELETE({commit}, payload) {

        // отправляем запрос
        const response = await requestFunctions.deleteDataAsync__json(urls.service.DELETE + '/' + payload.id);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            //
            commit('DELETE_ITEM', payload.id)
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
        }

        return responseObj;
    },

    async CREATE_SERVICE({commit,getters}, payload) {

        // отправляем запрос
        let post_data__serialized = getters['SERIALIZE_DATA'](payload);
        const response = await requestFunctions.postDataAsync__json(urls.service.CREATE, post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
        }

        return responseObj;
    },

    async UPDATE_SERVICE({commit,getters}, payload) {

        // отправляем запрос
        let url = requestFunctions.replacePlaceholderQueryString(urls.service.UPDATE, '{id}', payload.id);
        let post_data__serialized = getters['SERIALIZE_DATA'](payload);
        const response = await requestFunctions.postDataAsync__json(url,  post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);

        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
        }

        return responseObj;
    },

}
