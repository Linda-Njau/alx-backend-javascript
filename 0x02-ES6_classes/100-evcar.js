import Car from './10-car.js'; // eslint-disable-line

export default class Evcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; //eslint-disable-line
  }

  cloneCar() { // eslint-disable-line
    return new Car();
  }
}
