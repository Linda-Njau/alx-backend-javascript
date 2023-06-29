import Currency from './3-currency.js'; // eslint-disable-line
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount; //eslint-disable-line
    this._currency = currency; //eslint-disable-line
  }

  get amount() {
    return this._amount; // eslint-disable-line
  }

  set amount(value) {
    this._amount = value; // eslint-disable-line
  }

  get currency() {
    return this._currency; // eslint-disable-line
  }

  set currency(value) {
    this._currency = value; // eslint-disable-line
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static conversionPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
