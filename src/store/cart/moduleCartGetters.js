/**
 *
 */

export default {

    GET_TOTAL_SUM: (state) => {
        let tmp_items = state.ITEMS;

        let total_sum = 0;
        for (let item of tmp_items) {
            total_sum += parseFloat(item.services_price) * item.order_item_count;
        }

        return total_sum;
    },

    GET_TOTAL_COUNT: (state) => {
        let tmp_items = state.ITEMS;

        let total_count = 0;
        for (let item of tmp_items) {
            total_count += item.order_item_count;
        }

        return total_count;
    },

    GET_FLAG_IS_EMPTY: (state) => {
        return state.FLAG_IS_EMPTY;
    },

    GET_ITEMS: (state) => {
        return state.ITEMS;
    },

}
