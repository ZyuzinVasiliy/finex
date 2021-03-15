/**
 *
 */

export default {

    UPDATE_ITEMS(state, payload) {

        let tmp_payload = []
        for (let item of payload) {

            //console.log(item);
            let tmp_item = {};
            for (let key in item) {
                if (state.ITEMS_MODEL.hasOwnProperty(key)) {
                    tmp_item[state.ITEMS_MODEL[key]] = item[key];
                    //console.log('Da');
                    //console.log(key);
                } else {
                    //console.log('Net');
                    //console.log(key);
                }
            }

            tmp_payload.push(tmp_item);
        }

        state.ITEMS = tmp_payload;
    },

    UPDATE_PAGINATION(state, payload) {
        state.PAGINATION = payload;
    },

    UPDATE_CATEGORIES(state, payload) {
        let tmp_payload = []
        for (let item of payload) {

            //console.log(item);
            let tmp_item = {};
            for (let key in item) {
                if (state.CATEGORIES_MODEL.hasOwnProperty(key)) {
                    tmp_item[state.CATEGORIES_MODEL[key]] = item[key];
                }
            }

            tmp_payload.push(tmp_item);
        }

        state.CATEGORIES = tmp_payload;
    },

    UPDATE_ITEM(state, payload) {
        let tmp_payload = {};
        for (let key in payload) {

            if (state.ITEM_MODEL.hasOwnProperty(key)) {
                tmp_payload[state.ITEM_MODEL[key]] = payload[key];
            }
        }
        state.ITEM = tmp_payload;
    },

    DELETE_ITEM(state, payload) {
        state.ITEMS.forEach((item, i, arr) => {
            if (item.services_id == payload) {
                arr.splice(i, 1);
            }
        })
    },

}

