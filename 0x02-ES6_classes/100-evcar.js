import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const CurrentConstructor = this.constructor[Symbol.species];
    return new CurrentConstructor();
  }
}

export default EVCar;
