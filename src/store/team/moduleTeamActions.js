/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import tokenFunctions from '@/functions/auth/tokenFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

import urls from "@/vars/urls/index";
import ResponseObj from "@/classes/ResponseObj";

export default {

    async FETCH_LIST({commit}, payload = {queryParams: null}) {

        payload.queryParams['type'] = 'team';

        let url = urls.team.GET_LIST + requestFunctions.generateQueryString(payload.queryParams);

        const response = await requestFunctions.getDataAsync(url);
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
            responseObj.message = 'Ошибка при получении данных #EXPERTS_LIST';
        }

        return responseObj;

    },

    async FETCH_ITEM({commit}, payload) {

        let url = urls.team.GET_ITEM + '/' + payload.id;
        const response  = await requestFunctions.getDataAsync(url);
        let responseObj = new ResponseObj(response);

        console.log(responseObj);

        await tokenFunctions.checkResponseToken(responseObj);
        if (responseObj.success === true) {
            commit('UPDATE_ITEM', responseObj.getAttr('data').item)
        } else {
            //
            responseObj.message = 'Ошибка при получении данных #EXPERTS_ITEM';
        }

        return responseObj;

    },


}