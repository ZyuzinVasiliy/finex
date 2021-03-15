/**
 *
 */

export default {

    SET_OPEN(state) {
        state.flag_open = true;
    },

    SET_CLOSE(state) {
        state.flag_open = false;
    },

    SET_DATA(state, payload) {
        state.data = payload;
    },
    CLEAR_DATA(state) {
        state.data = state.ITEM_MODEL;
    },

}

