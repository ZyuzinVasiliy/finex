/**
 *
 */

export default {

  UPDATE_SETTINGS(state, payload) {
    state.SETTINGS = payload;
  },

  UPDATE_PROFILE(state, payload) {

    let tmp_item = {};
    for (let key in payload) {

      if (state.ITEM_MODEL.hasOwnProperty(key)) {
        tmp_item[state.ITEM_MODEL[key]] = payload[key];
      }
    }

    state.PROFILE = tmp_item;
  },
}

