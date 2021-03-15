/**
 * Подключаем файлы модуля
 */
import state from './moduleServiceCategoryState.js'
import mutations from './moduleServiceCategoryMutations.js'
import actions from './moduleServiceCategoryActions.js'
import getters from './moduleServiceCategoryGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
