/**
 * Подключаем файлы модуля
 */
import state from './moduleAppState.js'
import mutations from './moduleAppMutations.js'
import actions from './moduleAppActions.js'
import getters from './moduleAppGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
