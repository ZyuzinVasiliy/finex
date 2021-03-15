/**
 * Подключаем файлы модуля
 */
import state from './moduleNewsCategoryState.js'
import mutations from './moduleNewsCategoryMutations.js'
import actions from './moduleNewsCategoryActions.js'
import getters from './moduleNewsCategoryGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
