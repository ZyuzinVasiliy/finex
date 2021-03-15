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
    "request_messages_id": null,
    "request_messages_message": null,
    "request_messages_created_at": null,
    "users_id": null,
    "users_email": null,
    "users_email_verified_at": null,
    "users_role_code": null,
    "users_first_name": null,
    "users_last_name": null,
    "users_second_name": null,
    "users_birthday": null,
    "users_phone": null,
    "requests_id": null,
    "requests_subject": null,
    "requests_descriptions": null,
    "requests_types_code": null,
    "requests_types_name": null,
    "requests_statuses_code": null,
    "requests_statuses_name": null,
    "requests_date_open": null,
    "requests_date_close": null,
    "requests_created_at": null,
    "requests_updated_at": null,
    "requests_deleted_at": null
  },

  ITEM_TEMPLATE: {
    "request_messages_id": null,
    "request_messages_message": null,
    "request_messages_created_at": null,
    "users_id": null,
    "users_email": null,
    "users_email_verified_at": null,
    "users_role_code": null,
    "users_first_name": null,
    "users_last_name": null,
    "users_second_name": null,
    "users_birthday": null,
    "users_phone": null,
    "requests_id": null,
    "requests_subject": null,
    "requests_descriptions": null,
    "requests_types_code": null,
    "requests_types_name": null,
    "requests_statuses_code": null,
    "requests_statuses_name": null,
    "requests_date_open": null,
    "requests_date_close": null,
    "requests_created_at": null,
    "requests_updated_at": null,
    "requests_deleted_at": null
  },

  ITEM_MODEL: {
    "request_messages_id": "request_messages_id",
    "request_messages_message": "request_messages_message",
    "request_messages_created_at": "request_messages_created_at",
    "users_id": "users_id",
    "users_email": "users_email",
    "users_email_verified_at": "users_email_verified_at",
    "users_role_code": "users_role_code",
    "users_first_name": "users_first_name",
    "users_last_name": "users_last_name",
    "users_second_name": "users_second_name",
    "users_birthday": "users_birthday",
    "users_phone": "users_phone",
    "requests_id": "requests_id",
    "requests_subject": "requests_subject",
    "requests_descriptions": "requests_descriptions",
    "requests_types_code": "requests_types_code",
    "requests_types_name": "requests_types_name",
    "requests_statuses_code": "requests_statuses_code",
    "requests_statuses_name": "requests_statuses_name",
    "requests_date_open": "requests_date_open",
    "requests_date_close": "requests_date_close",
    "requests_created_at": "requests_created_at",
    "requests_updated_at": "requests_updated_at",
    "requests_deleted_at": "requests_deleted_at",
    "attachments": "attachments",
  },

  ITEM_SERIALIZER: {
    "request_messages_message": "message",
    "requests_id": "request_id",
    "upload_files__file": "upload_files__file",
    "upload_files__type": "upload_files__type",
  },
}
