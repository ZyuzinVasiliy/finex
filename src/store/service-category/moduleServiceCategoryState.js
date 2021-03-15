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
    'id': null,
    'name': null,
    'code': null,
    'color': '',
    'icon': '',
  },

  ITEMS_MODEL: {
    'service_categories_id': 'id',
    'service_categories_name': 'name',
    'service_categories_code': 'code',
    'service_categories_color': 'color',
    'service_categories_icon': 'icon',
  },
  ITEM_MODEL: {
    'id': 'id',
    'name': 'name',
    'code': 'code',
    'color': 'color',
    'icon': 'icon',
  },

  ITEM_SERIALIZER: {
    'name': 'name',
    'code': 'code',
    'color': 'color',
    'icon': 'icon',
  },
}
