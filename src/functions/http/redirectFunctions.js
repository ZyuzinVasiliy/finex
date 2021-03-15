/**
 * Created by XpoHo
 */

export default {

  /**
   *
   * @param router      - глобальный объект vue-router
   * @param store       - глобальный объект vuex
   * @param requestUrl  - URL на который необходимо перенаправить
   */
  redirect(router, store, requestUrl) {

    router.push({path: requestUrl});
  },
}
