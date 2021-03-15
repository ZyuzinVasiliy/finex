/**
 * Подключаем файлы модуля
 */
import state from './moduleAdminOrdersState.js'
import mutations from './moduleAdminOrdersMutations.js'
import actions from './moduleAdminOrdersActions.js'
import getters from './moduleAdminOrdersGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
