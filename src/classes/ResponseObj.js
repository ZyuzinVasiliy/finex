/*=========================================================================================
  File Name: /classes/ResponseObj.js
  Description:
==========================================================================================*/

export default class ResponseObj {

  // конструктор
  constructor(data) {

    if (typeof data === 'object') {
      this._data = data;
    }
    else {
      this._data = JSON.parse(data);
    }

    this._success = (this.getAttr('success') != null)? this.getAttr('success') : false;
    //this._status = (this.getAttr('success') != null && this.getAttr('success') === true)? 'success' : status;
    this._message = this.getAttr('message');
    this._result_code = this.getAttr('result_code');

    this._errors = [];
    if(this._success == false){
      this._errors = this.getAttr('data');
    }
  }

  getAttr(attrName) {
    let result = null

    if(this._data.hasOwnProperty(attrName)){
      result = this._data[attrName];
    }

    return result;
  }

  // data
  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  // status
  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  // success
  get success() {
    return this._success;
  }

  set success(value) {
    this._success = value;
  }

  // message
  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }

  // token
  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }

  // token
  get errors() {
    return this._errors;
  }

  set errors(value) {
    this._errors = value;
  }

  // token
  get result_code() {
    return this._result_code;
  }

  set result_code(value) {
    this._result_code = value;
  }

  // redirectUrl
  get callbackUrl() {
    return this._callbackUrl;
  }

  set callbackUrl(value) {
    this._callbackUrl = value;
  }

}
