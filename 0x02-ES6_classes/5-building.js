class Building {
  constructor(sqft) {
    Building.isNumber(sqft);
    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  static isNumber(val) {
    if (typeof val !== 'number') throw new TypeError();
  }

  set sqft(val) {
    Building.isNumber(val);
    this._sqft = val;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
