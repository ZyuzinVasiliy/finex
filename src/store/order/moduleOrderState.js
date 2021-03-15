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
  ITEM__WITH_ITEMS: [],

  PAYMENT_CALLBACK: {
    'flag_error': null,
    'orders_id': null,
    'orders_total_sum': 0,
    'orders_number': null,
    'orders_uuid': null,
    'orders_status': null,
    'order_items_id': null,
    'order_items_total_sum_by_item': null,
    'order_items_price': null,
    'order_items_count': null,
    'order_items_currency': null,
    'order_items_service_id': null,
    'order_items_order_id': null,
    'services_name': null,
    'services_description': null,
    'services_price_text': null,
  },

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
    'orders_total_sum': 0,
    'orders_number': null,
    'orders_uuid': null,
    'orders_created_at': null,
    'orders_status': null,
    'order_items_status': null,
    'order_items_id': null,
    'order_items_total_sum_by_item': null,
    'order_items_price': null,
    'order_items_count': null,
    'order_items_currency': null,
    'order_items_service_id': null,
    'order_items_order_id': null,
    'services_name': null,
    'services_description': null,
    'services_price_text': null,
    'services_full_price': null,
  },

  ITEM_MODEL: {
    'flag_error': 'flag_error',
    'orders_id': 'orders_id',
    'orders_total_sum': 'orders_total_sum',
    'orders_number': 'orders_number',
    'orders_uuid': 'orders_uuid',
    'orders_created_at': 'orders_created_at',
    'orders_status': 'orders_status',
    'order_items_status': 'order_items_status',
    'order_items_id': 'order_items_id',
    'order_items_total_sum_by_item': 'order_items_total_sum_by_item',
    'order_items_price': 'order_items_price',
    'order_items_count': 'order_items_count',
    'order_items_currency': 'order_items_currency',
    'order_items_service_id': 'order_items_service_id',
    'order_items_order_id': 'order_items_order_id',
    'services_name': 'services_name',
    'services_description': 'services_description',
    'services_price_text': 'services_price_text',
    'services_full_price': 'services_full_price',
  },

  ITEM_SERIALIZER: {
    'services_id': 'service_id',
    'order_item_count': 'count',
  },
}
