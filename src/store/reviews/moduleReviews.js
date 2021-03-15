/**
 * Подключаем файлы модуля
 */
import state from './moduleReviewsState.js'
import mutations from './moduleReviewsMutations.js'
import actions from './moduleReviewsActions.js'
import getters from './moduleReviewsGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
