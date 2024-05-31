class Airport {
  constructor(name, code) {
    Airport.isString(name);
    Airport.isString(code);
    this._name = name;
    this._code = code;
  }

  static isString(val) {
    if (typeof val !== 'string') throw new TypeError();
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}

export default Airport;
