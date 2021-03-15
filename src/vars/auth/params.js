/**
 * Created by XpoHo
 */
import config from "@/config"

const ADMIN_DOMAIN_PARAMS = {
  grant_type: {
    name: 'grant_type',
    value: 'password'
  },
  client_id: {
    name: 'client_id',
    value: '3'
  },
  client_secret: {
    name: 'client_secret',
    value: 'KWXvxAwIeRvIOl2WejXLW0RwRm8Y8kKKzndjyPKZ'

  },
}

const CLIENT_DOMAIN_PARAMS = {
  grant_type: {
    name: 'grant_type',
    value: 'password'
  },
  client_id: {
    name: 'client_id',
    value: '2'
  },
  client_secret: {
    name: 'client_secret',
    value: 'BaG77qxEcUGAor4eFpr96fNm7V71XHABKG3o2Wsv'
  },
}

const GRAND_TYPE = (config.PARAMS.SUBDOMAIN === 'ADMIN')? ADMIN_DOMAIN_PARAMS['grant_type']: CLIENT_DOMAIN_PARAMS['grant_type'];
const CLIENT_ID = (config.PARAMS.SUBDOMAIN === 'ADMIN')? ADMIN_DOMAIN_PARAMS['client_id']: CLIENT_DOMAIN_PARAMS['client_id'];
const CLIENT_SECRET = (config.PARAMS.SUBDOMAIN === 'ADMIN')? ADMIN_DOMAIN_PARAMS['client_secret']: CLIENT_DOMAIN_PARAMS['client_secret'];


// const GRAND_TYPE = {
//   name: 'grant_type',
//   value: 'password'
// };
// const CLIENT_ID = {
//   name: 'client_id',
//   value: '3'
// };
// const CLIENT_SECRET = {
//   name: 'client_secret',
//   value: 'i2dS8q8sIKFaA9DsPTnHvLtwH3o1TaX79g5oVsml'
// };


export default {
  // статусы пользователя
  GRAND_TYPE,
  CLIENT_ID,
  CLIENT_SECRET,

}
