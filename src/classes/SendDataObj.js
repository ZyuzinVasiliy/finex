
export default class SendDataObj{

  // конструктор
  constructor(payload, url = '/') {
    this.payload = payload;
    this.url = url;
  }

  get(key, idx) {
    return this[key] + '__suffix__' + idx;
  }

  // data
  get payload() {
    return this._payload;
  }
  set payload(value) {
    this._payload = value;
  }

  // url
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
  }
}
