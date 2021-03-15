/**
 * Created by XpoHo
 */

// подключаем axios
import axios from 'axios'

// подключаем функции работы с токенами
import tokenFunctions from '@/functions/auth/tokenFunctions'

// подключаем urls
import urls_api from '@/vars/urls/api/main'

// создаем объект axios
let axiosObj = axios.create({
  baseURL: urls_api.DOMAIN
});

export default {

  generateQueryString(params = {'field': 'created_at', 'type': 'desc'}){

    // let default_params = {'field': 'created_at', 'type': 'desc'}
    let default_params = {}
    if(params == null){
      params = default_params
    }

    let queryStringAr = [];
    // перебираем параметры запроса
    for(let key in params){
      queryStringAr.push(key+ '=' +params[key])
    }


    // перебираем параметры по-умолчанию
    for(let key in default_params){
      if(!Object.prototype.hasOwnProperty.call(params, key)){
        queryStringAr.push(key+ '=' +default_params[key])
      }
    }

    let queryPrefix = (Object.prototype.hasOwnProperty.call(params, 'id'))? params.id : '';

    let queryString = '';
    if(queryStringAr.length > 0){
      queryString = queryPrefix+ '?' +queryStringAr.join('&');
    }

    return queryString;
  },

  replacePlaceholderQueryString(input_value, search_value, replace_value){

    let queryString = input_value.replace(search_value, replace_value);

    return queryString;
  },

  /**
   * Отправка async GET-запроса
   * @param requestUrl
   * @param payload
   * @returns {Promise<unknown>}
   */
  async getDataAsync(requestUrl, payload = null) {

    // устанавливаем Bearer-токен в заголовок запроса
    axiosObj.defaults.headers.common['Authorization'] = 'Bearer ' + tokenFunctions.getToken();

    // преобразуем параметры для добавления
    let urlParams = [];
    if (payload != null) {
      for (let itemKey in payload) {
        urlParams.push(itemKey + '=' + payload[itemKey]);
      }
    }

    // добавляем параметры в запрос
    let urlSuffix = '';
    if(urlParams.length > 0){
      urlSuffix = '?' + urlParams.join('&');
    }

    // добавляем header поддерживающий отправку файлов
    let header = {headers: {'Accept': 'application/json'}};

    // получаем и возвращаем Promise
    return await axiosObj
      .get(requestUrl + urlSuffix, header)
      .then(response => {

        return response.data
      })
      .catch(function (error) {

        let errorResult = null;
        if (typeof error.response == 'undefined') {
          errorResult = error;
        }
        else {
          errorResult = error.response.data;
        }

        return errorResult
      });

  },
  // end

  /**
   * Отправка async POST-запроса
   * @param requestUrl
   * @param params
   * @returns {Promise<unknown>}
   */
  async postDataAsync(requestUrl, params) {

    // устанавливаем Bearer-токен в заголовок запроса
    axiosObj.defaults.headers.common['Authorization'] = 'Bearer ' + tokenFunctions.getToken();

    // добавляем header поддерживающий отправку файлов
    let header = {headers: {'Content-Type': 'multipart/form-data'}};

    // добавляем значения для отправки
    let formData = new FormData();
    for (let prop in params) {
      // Если отправляются фалы, то формируем соответствующий массив значений
      if (prop === 'upload_files') {
        for (let fileIdx in params[prop]) {
          let file = params[prop][fileIdx];
          formData.append('images[' + fileIdx + ']', file);
        }
      }

      else if (prop === 'upload_files__file') {
        for (let fileIdx in params[prop]) {
          let file = params[prop][fileIdx];
          formData.append('file[' + fileIdx + ']', file);
        }
      }
      else if (prop === 'upload_files__type') {
        for (let fileIdx in params[prop]) {
          let file = params[prop][fileIdx];
          formData.append('type[' + fileIdx + ']', file);
        }
      }

      else {
        formData.append(prop, params[prop]);
      }
    }

    // получаем и возвращаем Promise
    return await axiosObj
      .post(requestUrl, formData, header)
      .then(response => {

        return response.data
      })
      .catch(function (error) {

        let errorResult = null;
        if (typeof error.response == 'undefined') {
          errorResult = error;
        }
        else {
          errorResult = error.response.data;
        }

        return errorResult
      });

  },
  // end

  /**
   * Отправка async POST-запроса
   * @param requestUrl
   * @param params
   * @returns {Promise<unknown>}
   */
  async postDataAsync__json(requestUrl, params) {

    // axiosObj = axios.create({
    //   baseURL: 'http://192.168.0.168'
    // });

    // устанавливаем Bearer-токен в заголовок запроса
    axiosObj.defaults.headers.common['Authorization'] = 'Bearer ' + tokenFunctions.getToken();

    // добавляем header поддерживающий отправку файлов
    let header = {headers: {'Content-Type': 'application/json'}};

    const data_json = JSON.stringify(params);

    // получаем и возвращаем Promise
    return await axiosObj
      .post(requestUrl, data_json, header)
      .then(response => {

        return response.data
      })
      .catch(function (error) {

        let errorResult = null;
        if (typeof error.response == 'undefined') {
          errorResult = error;
        }
        else {
          errorResult = error.response.data;
        }

        return errorResult
      });

  },
  // end


  async deleteDataAsync__json(requestUrl, params) {

    // устанавливаем Bearer-токен в заголовок запроса
    axiosObj.defaults.headers.common['Authorization'] = 'Bearer ' + tokenFunctions.getToken();

    // добавляем header поддерживающий отправку файлов
    let header = {headers: {'Content-Type': 'application/json'}};

    const data_json = JSON.stringify(params);

    let delete_body = {
      headers: header,
      data: params
    }
    // получаем и возвращаем Promise
    return await axiosObj
    .delete(requestUrl, delete_body)
    .then(response => {

      return response.data
    })
    .catch(function (error) {

      let errorResult = null;
      if (typeof error.response == 'undefined') {
        errorResult = error;
      }
      else {
        errorResult = error.response.data;
      }

      return errorResult
    });

  },
  // end
}
