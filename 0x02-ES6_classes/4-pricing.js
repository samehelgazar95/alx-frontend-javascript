import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    Pricing.isNumber(amount);
    Pricing.isCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  static isNumber(val) {
    if (typeof val !== 'number') throw new TypeError();
  }

  static isCurrency(val) {
    if (val instanceof Currency === false) throw new TypeError();
  }

  set amount(val) {
    Pricing.isNumber(val);
    this._amount = val;
  }

  set currency(val) {
    Pricing.isCurrency(val);
    this._currency = val;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.isNumber(amount);
    Pricing.isNumber(conversionRate);
    return amount * conversionRate;
  }
}

export default Pricing;
