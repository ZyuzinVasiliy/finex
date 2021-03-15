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
    'payment_bills_id': null,
    'payment_bills_order_id': null,
    'payment_bill_items_id': null,
    'payment_bills_total_sum': 0,
    'payment_bills_number': null,
    'payment_bills_status': null,
    'payment_bills_confirmation_url': null,
    'payment_bills_create_request_date': null,
    'payment_bills_payed_date': null,
    'payment_bill_items_status': null,
    'payment_bill_items_total_sum_by_item': null,
    'payment_bill_items_total_sum_full_price_by_item': null,
    'payment_bill_items_price': null,
    'payment_bill_items_full_price': null,
    'payment_bill_items_count': null,
    'payment_bill_items_currency': null,
    'payment_bill_items_service_id': null,
    'payment_bill_items_order_item_id': null,
    'services_name': null,
    'services_description': null,
    'services_price_text': null,
  },

  ITEM_MODEL: {
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
    'services_name': 'services_name',
    'services_description': 'services_description',
    'services_price_text': 'services_price_text',
  },

  ITEM_SERIALIZER: {

  },
}
