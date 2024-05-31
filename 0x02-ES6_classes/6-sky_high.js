import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    SkyHighBuilding.isNumber(floors);
    super(sqft);
    this._floors = floors;
  }

  static isNumber(val) {
    if (typeof val !== 'number') throw new TypeError();
  }

  set floors(val) {
    Building.isNumber(val);
    this._floors = val;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
