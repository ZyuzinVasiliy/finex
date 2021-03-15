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

        let response = '';

        if(payload.queryParams.type == 'users'){
            response = await requestFunctions.getDataAsync(urls.news.USERS_GET + requestFunctions.generateQueryString(payload.queryParams));
        } else {
            response = await requestFunctions.getDataAsync(urls.news.GET + requestFunctions.generateQueryString(payload.queryParams));
        }

        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            if(payload.queryParams === null || typeof payload.queryParams.fl_add === 'undefined') {
                commit('UPDATE_ITEMS', responseObj.getAttr('data').items)
            } else{
                commit('ADD_ITEMS', responseObj.getAttr('data').items)
            }
            commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #GET_LIST_NEWS';
        }

        return responseObj;
    },

    async FETCH_ITEM({commit}, payload = {queryParams: {}}) {

        let url = '';
        if(payload.queryParams.type == 'users') {
            url = requestFunctions.replacePlaceholderQueryString(urls.news.USERS_GET_ITEM, '{id}', payload.queryParams.id);
        } else {
            url = requestFunctions.replacePlaceholderQueryString(urls.news.GET_ITEM, '{id}', payload.queryParams.id);
        }

        const response = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_ITEM', responseObj.getAttr('data')[0])
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #GET_ITEM_NEWS';
        }

        return responseObj;
    },

    async DELETE({commit}, payload) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.news.DELETE, '{id}', payload.id);

        // отправляем запрос
        const response = await requestFunctions.deleteDataAsync__json(url);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
            commit('DELETE_ITEM', payload.id)
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #DELETE_NEWS';
        }

        return responseObj;
    },

    async CREATE({commit, getters}, payload) {

        let post_data__serialized = getters['SERIALIZE_DATA'](payload);

        // отправляем запрос
        const response = await requestFunctions.postDataAsync__json(urls.news.CREATE, post_data__serialized);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #CREATE_NEWS';
        }

        return responseObj;
    },

    async UPDATE({commit, getters}, payload) {

        let url = requestFunctions.replacePlaceholderQueryString(urls.news.UPDATE, '{id}', payload.news_id);
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
            responseObj.message = 'Ошибка при отправке данных #UPDATE_NEWS';
        }

        return responseObj;
    },

    async SEND_UPLOAD_FILE({commit}, payload) {

        // отправляем запрос
        const response = await requestFunctions.postDataAsync(urls.news.ADD_IMAGE+'/'+payload.news_id, payload);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #SEND_UPLOAD_FILE';
        }

        return responseObj;
    },

    async SEND_DELETE_FILE({commit}, payload) {
        // отправляем запрос
        const response = await requestFunctions.deleteDataAsync__json(urls.news.DELETE_IMAGE+'/'+payload.queryParams.news_id, payload.queryParams);

        // создаем объект ответа
        let responseObj = new ResponseObj(response);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            //
        } else {
            //
            responseObj.message = 'Ошибка при отправке данных #SEND_DELETE_FILE';
        }

        return responseObj;
    },

}
