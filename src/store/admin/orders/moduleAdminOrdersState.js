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

  USER_FIELDS: {
    'last_name': 'users_last_name',
    'first_name': 'users_first_name',
    'second_name': 'users_second_name'
  },

  ORDER_STATUS: {
    'pending': 'Не оплачено',
    'pre_payed': 'Предоплата',
    'payed': 'Оплачено'
  },
  ORDER_STATUS_PAYED: ['payed'],
  ORDER_STATUS_PRE_PAYED: ['pre_payed'],
  PAYMENT_BILL_STATUS_PAYED: ['pre_payed', 'payed'],
  ORDER_ITEM_STATUS_PAYED: ['pre_payed', 'payed'],

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
    'orders_total_sum': null,
    'orders_number': null,
    'orders_global_number': null,
    'orders_created_at': null,
    'orders_status': null,

    'order_items_status': null,
    'order_items_id': null,
    'order_items_total_sum_by_item': null,
    'order_items_total_sum_full_price_by_item': null,
    'order_items_price': null,
    'order_items_full_price': null,
    'order_items_count': null,
    'order_items_currency': null,
    'order_items_service_id': null,
    'order_items_order_id': null,

    'users_first_name': null,
    'users_last_name': null,
    'users_second_name': null,

    'services_name': null,
    'services_description': null,
    'services_price_text': null,

    'payment_bills.id': null,
    'payment_bills.order_id': null,
    'payment_bills.total_sum': null,
    'payment_bills.number': null,
    'payment_bills.status': null,
    'payment_bills.confirmation_url': null,

    'payment_bills.create_request_date': null,
    'payment_bills.payed_date': null,

    'payment_bill_items.id': null,
    'payment_bill_items.status': null,
    'payment_bill_items.total_sum_by_item': null,
    'payment_bill_items.total_sum_full_price_by_item': null,
    'payment_bill_items.price': null,
    'payment_bill_items.full_price': null,
    'payment_bill_items.count': null,
    'payment_bill_items.currency': null,
    'payment_bill_items.service_id': null,
    'payment_bill_items.order_item_id': null,
  },

  ITEM_MODEL: {

    'orders_id': 'orders_id',
    'orders_total_sum': 'orders_total_sum',
    'orders_number': 'orders_number',
    'orders_global_number': 'orders_global_number',
    'orders_created_at': 'orders_created_at',
    'orders_status': 'orders_status',

    'order_items_status': 'order_items_status',
    'order_items_id': 'order_items_id',
    'order_items_total_sum_by_item': 'order_items_total_sum_by_item',
    'order_items_total_sum_full_price_by_item': 'order_items_total_sum_full_price_by_item',
    'order_items_price': 'order_items_price',
    'order_items_full_price': 'order_items_full_price',
    'order_items_count': 'order_items_count',
    'order_items_currency': 'order_items_currency',
    'order_items_service_id': 'order_items_service_id',
    'order_items_order_id': 'order_items_order_id',

    'users_first_name': 'users_first_name',
    'users_last_name': 'users_last_name',
    'users_second_name': 'users_second_name',

    'services_name': 'services_name',
    'services_description': 'services_description',
    'services_price_text': 'services_price_text',

    'payment_bills_id': 'payment_bills_id',
    'payment_bills_order_id': 'payment_bills_order_id',
    'payment_bill_items_id': 'payment_bill_items_id',
    'payment_bills_total_sum': 'payment_bills_total_sum',
    'payment_bills_number': 'payment_bills_number',
    'payment_bills_status': 'payment_bills_status',
    'payment_bills_confirmation_url': 'payment_bills_confirmation_url',
    'payment_bills_create_request_date': 'payment_bills_create_request_date',
    'payment_bills_payed_date': 'payment_bills_payed_date',
    'payment_bill_items_status': 'payment_bill_items_status',
    'payment_bill_items_total_sum_by_item': 'payment_bill_items_total_sum_by_item',
    'payment_bill_items_total_sum_full_price_by_item': 'payment_bill_items_total_sum_full_price_by_item',
    'payment_bill_items_price': 'payment_bill_items_price',
    'payment_bill_items_full_price': 'payment_bill_items_full_price',
    'payment_bill_items_count': 'payment_bill_items_count',
    'payment_bill_items_currency': 'payment_bill_items_currency',
    'payment_bill_items_service_id': 'payment_bill_items_service_id',
    'payment_bill_items_order_item_id': 'payment_bill_items_order_item_id',
  },

  ITEM_SERIALIZER: {
    'orders_id': 'orders_id',
    'order_items_id': 'order_items_id',
    'sum': 'sum',
  },
}
