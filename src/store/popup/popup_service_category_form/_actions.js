/**
 * методы, которые вызываются для изменения state, отправки axios-запросов
 */
import store from '@/store/index'

export default {

  // OPEN/CLOSE
  async SET_OPEN({commit}) {
    document.querySelector("body").classList.add('no-scroll');
    document.querySelector("html").classList.add('no-scroll');
    commit('SET_OPEN')
  },
  async SET_CLOSE({commit}) {
    document.querySelector("body").classList.remove('no-scroll');
    document.querySelector("html").classList.remove('no-scroll');
    commit('SET_CLOSE')
  },

  // DATA
  async SET_DATA({commit}, payload) {
    commit('SET_DATA', payload)
  },
  async CLEAR_DATA({commit}) {
    commit('CLEAR_DATA')
  },


  // Отправка запроса на редактирование
  async SAVE({getters}, payload){

    let result = null;
    if(payload.id == null){
      result = await store.dispatch('service_category/CREATE', payload);
    }
    else{
      result = await store.dispatch('service_category/UPDATE', payload);
    }

    return result;
  },
}
