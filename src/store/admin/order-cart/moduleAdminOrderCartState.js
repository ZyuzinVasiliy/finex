/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

  /**
   * переменная state с указанием значения по-умолчанию
   */
  ITEMS: [],
  FLAG_IS_EMPTY: true,

  PAGINATION: {
    current_page: 1,
    total_item_count: 1,
    last_page: 1,
    per_page: 30,
    from: 1,
    to: 1,
    prev_page: 1,
    next_page: 1,
  },

  ITEM: {
    'orders_id': null,
    'order_items_id': null,
    'sum': null,
  },

  ITEM_MODEL: {
    'orders_id': 'orders_id',
    'order_items_id': 'order_items_id',
    'sum': 'sum',
  },

  ITEM_SERIALIZER: {
    'orders_id': 'orders_id',
    'order_items_id': 'order_items_id',
    'sum': 'sum',
  },
}
