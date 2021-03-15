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
    const response = await requestFunctions.getDataAsync(urls.request.GET + requestFunctions.generateQueryString());
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_ITEMS', responseObj.getAttr('data').items)

      // commit('FILTER_ITEMS', payload)
      // commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
    }
    else {
      //
      responseObj.message = 'Ошибка при получении данных #REQUEST_GET_LIST';
    }

    return responseObj;

  },

  // @TODO
  async FETCH_ITEM({commit}, payload) {
    let url = requestFunctions.replacePlaceholderQueryString(urls.request.GET_ITEM, '{requests_id}', payload.requests_id);
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
      responseObj.message = 'Ошибка при получении данных #REQUEST_GET_LIST';
    }

    return responseObj;

  },

  // Отправка запроса на редактирование
  async CREATE_REQUEST({getters}, payload){

    let post_data__serialized = getters['serializeData'](payload);

    const response = await requestFunctions.postDataAsync__json(urls.request.CREATE, post_data__serialized);
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      responseObj.callbackUrl = '/supports';
    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #REQUEST_CREATE_ITEM';
    }

    return responseObj;
  },

  // Отправка запроса на редактирование
  async UPDATE_STATUS({getters}, payload){

    let post_data__serialized = getters['serializeData'](payload);

    let url = requestFunctions.replacePlaceholderQueryString(urls.request.UPDATE_STATUS, '{requests_id}', payload.requests_id);
    const response = await requestFunctions.postDataAsync__json(url, post_data__serialized);
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      //responseObj.callbackUrl = '/admin/supports';
    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #REQUEST_CREATE_ITEM';
    }

    return responseObj;
  },


  async CLEAR({commit}){
    commit('CLEAR')
  },

}
