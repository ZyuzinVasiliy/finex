/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */

// classes
import ResponseObj from "@/classes/ResponseObj";

// functions
import tokenFunctions from '@/functions/auth/tokenFunctions'
import authFunctions from '@/functions/auth/authFunctions'
import requestFunctions from '@/functions/http/requestFunctions'

import router from "../../router";

// urls
import urls from '@/vars/urls'
// params
import authParams from '@/vars/auth/params'

export default {

  async SEND_LOGIN({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры
    payload[authParams.GRAND_TYPE.name] = authParams.GRAND_TYPE.value;
    payload[authParams.CLIENT_ID.name] = authParams.CLIENT_ID.value;
    payload[authParams.CLIENT_SECRET.name] = authParams.CLIENT_SECRET.value;

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.LOGIN, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.getAttr('access_token') !== null) {

      responseObj.success = true;
      responseObj.callbackUrl = urls.selfMain.HOME;

      // сохраняем токен глобально
      tokenFunctions.addToken(responseObj.getAttr('access_token'));

      //сохраняем токен
      commit('UPDATE_TOKEN', {token: responseObj.getAttr('access_token')});

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_LOGIN';
    }

    return responseObj;
  },

  async SEND_REGISTRATION({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.REGISTRATION, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.getAttr('success') !== null) {
      if(responseObj.getAttr('success') === true){
        responseObj.status = 'success';
        responseObj.callbackUrl = '/registration/confirm';
      }
    }

    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;

  },

  async SEND_RECOVERY_REQUEST({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.RECOVERY_PASSWORD_REQUEST, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.success === true) {

      //
      console.log('REG OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_REGISTRATION';
    }

    return responseObj;
  },


  async REGISTRATION_FINISH({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.REGISTRATION_FINISH, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.success === true) {

      //
      console.log('TOKEN OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_RECOVERY_REQUEST';
    }

    return responseObj;
  },

  async CHECK_RECOVERY_TOKEN({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.RECOVERY_CHECK_TOKEN, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.success === true) {

      //
      console.log('TOKEN OK');

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_RECOVERY_REQUEST';
    }

    return responseObj;
  },

  async SEND_NEW_PASSWORD({commit}, payload) {

    // добавляем в запрос авторизации дополнительные параметры

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.RECOVERY_PASSWORD_NEW_PASSWORD, payload);

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.success === true) {

      //
      console.log('SET OK');
      responseObj.callbackUrl = '/login';

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_SET_NEW_PASSWORD';
    }

    return responseObj;
  },


  async CHECK_SCOPE({commit}) {

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.apiAuth.CHECK_SCOPE, {});

    console.log('=========CHECK_SCOPE============');
    console.log(response)

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.success === false) {

      // token invalid
      authFunctions.logout();
      await router.push({path: '/login'});
    }

    return responseObj;
  },

}
