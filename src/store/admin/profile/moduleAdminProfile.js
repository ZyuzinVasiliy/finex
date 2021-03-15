/**
 * Подключаем файлы модуля
 */
import state from './moduleAdminProfileState.js'
import mutations from './moduleAdminProfileMutations.js'
import actions from './moduleAdminProfileActions.js'
import getters from './moduleAdminProfileGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
