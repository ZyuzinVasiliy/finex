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
    "requests_id": null,
    "users_id": null,
    "users_email": null,
    "users_email_verified_at": null,
    "users_role_code": null,
    "users_first_name": null,
    "users_last_name": null,
    "users_second_name": null,
    "users_birthday": null,
    "users_phone": null,
    "requests_subject": null,
    "requests_descriptions": null,
    "requests_types_code": null,
    "requests_types_name": null,
    "requests_statuses_code": null,
    "requests_statuses_name": null,
    "requests_date_open": null,
    "requests_date_close": null,
    "requests_order_id": null,
    "requests_order_item_ids": null,
    "requests_created_at": null,
    "requests_updated_at": null,
    "requests_deleted_at": null,
  },

  ITEM_TEMPLATE: {
    "requests_id": null,
    "users_id": null,
    "users_email": null,
    "users_email_verified_at": null,
    "users_role_code": null,
    "users_first_name": null,
    "users_last_name": null,
    "users_second_name": null,
    "users_birthday": null,
    "users_phone": null,
    "requests_subject": null,
    "requests_descriptions": null,
    "requests_types_code": null,
    "requests_types_name": null,
    "requests_statuses_code": null,
    "requests_statuses_name": null,
    "requests_date_open": null,
    "requests_date_close": null,
    "requests_order_id": null,
    "requests_order_item_ids": null,
    "requests_created_at": null,
    "requests_updated_at": null,
    "requests_deleted_at": null,
  },

  ITEM_MODEL: {
    "requests_id": "requests_id",
    "users_id": "users_id",
    "users_email": "users_email",
    "users_email_verified_at": "users_email_verified_at",
    "users_role_code": "users_role_code",
    "users_first_name": "users_first_name",
    "users_last_name": "users_last_name",
    "users_second_name": "users_second_name",
    "users_birthday": "users_birthday",
    "users_phone": "users_phone",
    "requests_subject": "requests_subject",
    "requests_descriptions": "requests_descriptions",
    "requests_types_code": "requests_types_code",
    "requests_types_name": "requests_types_name",
    "requests_statuses_code": "requests_statuses_code",
    "requests_statuses_name": "requests_statuses_name",
    "requests_date_open": "requests_date_open",
    "requests_date_close": "requests_date_close",
    "requests_order_id": "requests_order_id",
    "requests_order_item_ids": "requests_order_item_ids",
    "requests_created_at": "requests_created_at",
    "requests_updated_at": "requests_updated_at",
    "requests_deleted_at": "requests_deleted_at",
  },

  ITEM_SERIALIZER: {
    "subject": "subject",
    "descriptions": "descriptions",
    "type_code": "type_code",
    "status_code": "status_code",
    "order_id": "order_id",
    "order_item_id": "order_item_id",
  },
}
