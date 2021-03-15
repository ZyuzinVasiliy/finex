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

// params
import authParams from '@/vars/auth/params'

export default {

  async SEND_PROFILE({commit, getters}, payload) {

    // серилизуем данные
    let serialize_data = getters['serializeData'](payload['send_date']);

    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.UPDATE, '{user_id}', payload['user_id']);

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
      responseObj.message = 'Ошибка при отправке данных #SEND_PROFILE';
    }

    return responseObj;
  },

  async FETCH_PROFILE({commit}, payload) {

    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.GET_ITEM, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.getDataAsync(url);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);
    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_PROFILE', responseObj.getAttr('data').item)
    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #FETCH_PROFILE';
    }

    return responseObj;
  },

  async SEND_UPLOAD_FILE({commit}, payload) {

    let url = requestFunctions.replacePlaceholderQueryString(urls.admin.users.UPLOAD_IMAGE, '{user_id}', payload.user_id);

    // отправляем запрос
    const response = await requestFunctions.postDataAsync(url, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      //
      console.log('OK');
    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #SEND_UPLOAD_FILE';
    }

    return responseObj;
  },

  async SEND_DELETE_FILE({commit}, payload) {

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
      responseObj.message = 'Ошибка при отправке данных #SEND_DELETE_FILE';
    }

    return responseObj;
  },

}
