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

  toString() {
    return `[Object ${this._code}]`;
  }
}

export default Airport;
