class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this; // Returns Current Constructor
  }

  cloneCar() {
    const CurrentConstructor = this.constructor[Symbol.species];
    return new CurrentConstructor(this._brand, this._motor, this._color);
  }
}

export default Car;
