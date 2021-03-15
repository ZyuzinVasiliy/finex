/**
 * Подключаем файлы модуля
 */
import state from './moduleAdminUsersState.js'
import mutations from './moduleAdminUsersMutations.js'
import actions from './moduleAdminUsersActions.js'
import getters from './moduleAdminUsersGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
