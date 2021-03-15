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
    let serialize_data = getters['serializeData'](payload);

    console.log(serialize_data);

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.profile.UPDATE_PROFILE, serialize_data);

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

  async SEND_SETTINGS({commit}, payload) {
    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.profile.UPDATE_SETTINGS, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      //
      console.log('OK');
    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;
  },

  async FETCH_PROFILE({commit}, payload) {

    let url = urls.profile.GET_PROFILE;

    // отправляем запрос
    const response = await requestFunctions.getDataAsync(url);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);
    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_PROFILE', responseObj.getAttr('data').item)
    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #FETCH_SETTINGS';
    }

    return responseObj;
  },

  async FETCH_SETTINGS({commit}, payload) {

    // отправляем запрос
    const response = await requestFunctions.getDataAsync(urls.profile.GET_SETTINGS + requestFunctions.generateQueryString());

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {
      commit('UPDATE_SETTINGS', responseObj.getAttr('data').item)
    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #FETCH_SETTINGS';
    }

    return responseObj;
  },

  async SEND_UPLOAD_FILE({commit}, payload) {

    // отправляем запрос
    const response = await requestFunctions.postDataAsync(urls.profile.UPLOAD_IMAGE, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    await tokenFunctions.checkResponseToken(responseObj);

    if (responseObj.success === true) {

      //
      console.log('OK');

    } else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;
  },

  async SEND_DELETE_FILE({commit}, payload) {
    // отправляем запрос
    const response = await requestFunctions.deleteDataAsync__json(urls.profile.DELETE_IMAGE, payload);

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
