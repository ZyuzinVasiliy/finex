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

  async SET_OPEN({commit}) {

    commit('SET_OPEN')
  },
  async SET_CLOSE({commit}) {

    commit('SET_CLOSE')
  },

}
