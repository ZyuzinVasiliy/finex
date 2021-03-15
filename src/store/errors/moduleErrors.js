/**
 * Подключаем файлы модуля
 */
import state from './moduleErrorsState.js'
import mutations from './moduleErrorsMutations.js'
import actions from './moduleErrorsActions.js'
import getters from './moduleErrorsGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
