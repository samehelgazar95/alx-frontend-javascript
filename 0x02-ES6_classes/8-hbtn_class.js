class HolbertonClass {
  constructor(size, location) {
    HolbertonClass.isNumber(size);
    HolbertonClass.isString(location);

    this._size = size;
    this._location = location;
  }

  static isNumber(val) {
    if (typeof val !== 'number') throw new TypeError();
  }

  static isString(val) {
    if (typeof val !== 'string') throw new TypeError();
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') return this._size;
    if (cast === 'string') return this._location;
    return this;
  }
}

export default HolbertonClass;
