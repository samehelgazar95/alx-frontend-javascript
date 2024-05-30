class Currency {
  constructor(code, name) {
    Currency.checkString(code);
    Currency.checkString(name);
    this._code = code;
    this._name = name;
  }
  static checkString(value) {
    if (typeof value !== 'string') throw new TypeError();
  }

  set code(val) {
    checkString(val);
    this._code = val;
  }

  set name(val) {
    checkString(val);
    this._name = val;
  }

  get code() {
    return this._code;
  }

  get name () {
    return this._name;
  }

}

export default Currency;
