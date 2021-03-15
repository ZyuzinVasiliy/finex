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

  async SEND_EVENT_ON_CLOSE_APP({commit}) {

    // отправляем запрос
    const response = await requestFunctions.postDataAsync__json(urls.app.ON_CLOSE_APP, {});

    // создаем объект ответа
    let responseObj = new ResponseObj(response);

    if (responseObj.getAttr('access_token') !== null) {

      console.log('22')

    }
    else {
      //
      responseObj.message = 'Ошибка при отправке данных #AUTH_LOGIN';
    }

    return responseObj;
  },


  SET_INTERVAL({commit}, payload) {


    console.log('==========payload===========');
    console.log(payload)

    commit('UPDATE_INTERVAL_LIST', payload)
  },

}
