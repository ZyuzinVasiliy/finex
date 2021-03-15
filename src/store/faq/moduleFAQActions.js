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
    const response = await requestFunctions.getDataAsync(urls.faq.GET + requestFunctions.generateQueryString());
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
}
