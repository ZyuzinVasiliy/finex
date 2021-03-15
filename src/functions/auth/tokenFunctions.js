/**
 * Created by XpoHo on 23.12.2019.
 */

import authFunctions from '@/functions/auth/authFunctions'
import router from "@/router/index";

export default {

  // сохраняем токен в localStorage
  addToken(token) {
    localStorage.fin_expert__token = token;
  },

  // получаем токен из localStorage
  getToken() {
    let returnValue = '';
    if(typeof localStorage.fin_expert__token != 'undefined'){
      returnValue = localStorage.fin_expert__token;
    }
    return returnValue
  },

  // удаляем token - выход
  resetToken(){
    delete localStorage.fin_expert__token;

    // редирект
    router.push({path: '/'});
  },

  async checkResponseToken(response_obj) {

    if (response_obj.getAttr('error') !== false) {

      let error_result = false;

      if(response_obj.getAttr('error') === 'token_invalid'){
        error_result = true;
      }

      if(response_obj.result_code != null){
        if(response_obj.result_code === 'ACCESS_DENIED'){
          error_result = true;
        }
      }

      if (error_result === true) {

        // token invalid
        authFunctions.logout();
        await router.push({path: '/login'});
      }
    }
  }

}
