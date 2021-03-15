/**
 * Подключаем файлы модуля
 */
import state from './moduleAdminOrderCartState.js'
import mutations from './moduleAdminOrderCartMutations.js'
import actions from './moduleAdminOrderCartActions.js'
import getters from './moduleAdminOrderCartGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
