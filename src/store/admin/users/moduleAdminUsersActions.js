/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */

// classes
import ResponseObj from "@/classes/ResponseObj";

// functions
import tokenFunctions from '@/functions/auth/tokenFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

// urls
import urls from '@/vars/urls'

export default {

  async FETCH_LIST({commit}, payload = {queryParams: null}) {
    const response = await requestFunctions.getDataAsync(urls.admin.users.GET + requestFunctions.generateQueryString(payload.queryParams));
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    console.log(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_ITEMS', responseObj.getAttr('data').items)

      // commit('FILTER_ITEMS', payload)
      commit('UPDATE_PAGINATION', responseObj.getAttr('data').pagination)
    }
    else {
      //
      responseObj.message = 'Ошибка при получении данных #A_USERS_GET_LIST';
    }
    return responseObj;
  },

  async FETCH_ITEM({commit}, payload = {queryParams: null}) {


    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.GET_ITEM, '{user_id}', payload.user_id);
    const response = await requestFunctions.getDataAsync(url);
    let responseObj = new ResponseObj(response);

    console.log(responseObj);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_ITEM', responseObj.getAttr('data').item)
    }
    else {
      //
      responseObj.message = 'Ошибка при получении данных #A_USERS_GET_ITEM';
    }
    return responseObj;
  },

  async SET_ACTIVE_USER({commit}, payload) {

    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.ACTIVATION, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(url);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {

      //
      console.log('OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #A_USER_ACTIVATION';
    }

    return responseObj;
  },

  async UPDATE_PROFILE_BY_ID({commit, getters}, payload) {
    // серилизуем данные
    let serialize_data = getters['serializeData'](payload);
    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.UPDATE, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(url, serialize_data);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {

      //
      console.log('OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #A_USER_UPDATE';
    }

    return responseObj;
  },

  async SEND_UPLOAD_FILE_PROFILE_BY_ID({commit}, payload) {
    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.UPLOAD_IMAGE, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.postDataAsync(url, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {

      //
      console.log('OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;
  },
  async SEND_DELETE_FILE_PROFILE_BY_ID({commit}, payload) {
    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.DELETE_IMAGE, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.deleteDataAsync__json(url, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {

      //
      console.log('OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;
  },


}
