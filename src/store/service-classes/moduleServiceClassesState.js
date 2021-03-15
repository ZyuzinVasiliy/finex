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
    total_item_count: 0,
    last_page: 1,
    per_page: 30,
    from: 1,
    to: 1,
    prev_page: 1,
    next_page: 1,
  },

  ITEM: {
    'service_classes_id': null,
    'service_classes_name': null,
    'service_classes_description': null,
    'service_classes_short_description': null,
    'service_classes_list_courses': null,
    'service_categories_id': null,
    'service_categories_name': null,
    'service_categories_color': null,
    'service_categories_icon': null,
    'services_min_price': 0,
    'services_price': 0,
    'services_price_text': null,
    'count_service': 0,
    'installment': false,
  },

  ITEMS_MODEL: {
    'service_classes_id': 'service_classes_id',
    'service_classes_name': 'service_classes_name',
    'service_classes_description': 'service_classes_description',
    'service_classes_short_description': 'service_classes_short_description',
    'service_classes_list_courses': 'service_classes_list_courses',
    'service_categories_id': 'service_categories_id',
    'service_categories_name': 'service_categories_name',
    'service_categories_color': 'service_categories_color',
    'service_categories_icon': 'service_categories_icon',
    'services_min_price': 'services_min_price',
    'services_price': 'services_price',
    'services_price_text': 'services_price_text',
    'count_service': 'count_service',
    'installment': 'installment',
  },

  ITEM_MODEL: {
    'service_classes_id': 'service_classes_id',
    'service_classes_name': 'service_classes_name',
    'service_classes_description': 'service_classes_description',
    'service_classes_short_description': 'service_classes_short_description',
    'service_classes_list_courses': 'service_classes_list_courses',
    'service_categories_id': 'service_categories_id',
    'service_categories_name': 'service_categories_name',
    'service_categories_color': 'service_categories_color',
    'service_categories_icon': 'service_categories_icon',
    'services_min_price': 'services_min_price',
    'services_price': 'services_price',
    'services_price_text': 'services_price_text',
    'count_service': 'count_service',
    'installment': 'installment',
    'services': 'services',
  },

  ITEM_SERIALIZER: {
    'name': 'name',
    'category_id': 'category_id',
    'description': 'description',
    'short_description': 'short_description',
  },

}
