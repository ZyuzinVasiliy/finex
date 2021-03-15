/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
// import requestFunctions from '@/functions/http/requestFunctions'
// import urls from "@/vars/urls/index";
// import ResponseObj from "@/classes/ResponseObj";
import JsonValidator from "@/functions/validators/JsonValidator";

export default {

    async ADD_ITEM({commit}, payload) {

        commit('UPDATE_ITEM', payload)
    },

    async HIDE_PANEL({commit}) {
        commit('UPDATE_ITEM', null);
    },
}
