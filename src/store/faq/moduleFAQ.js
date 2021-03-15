/**
 * Подключаем файлы модуля
 */
import state from './moduleFAQState.js'
import mutations from './moduleFAQMutations.js'
import actions from './moduleFAQActions.js'
import getters from './moduleFAQGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
