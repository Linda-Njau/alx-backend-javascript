export default class Currency {
  constructor(code, name) {
    this._code = code; //eslint-disable-line
    this._name = name; //eslint-disable-line
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  get code() {
    return this._code; // eslint-disable-line
  }

  set code(value) {
    this._code = value; // eslint-disable-line
  }

  get name() {
    return this._name; // eslint-disable-line
  }

  set name(value) {
    this._name = value; // eslint-disable-line
  }
}
