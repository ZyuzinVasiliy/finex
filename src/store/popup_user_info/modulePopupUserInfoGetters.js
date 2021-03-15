/**
 *
 */

export default {

  /**
   * Метод везвращает значение state
   *
   * пример вызова this.$store.getters['MODULE_NAMESPACE/getStateVariableName']
   * @param state
   * @returns {null}
   */
  GET_STATUS_OPEN: (state) => {
    return state.ITEM.flag_open;
  },

}
