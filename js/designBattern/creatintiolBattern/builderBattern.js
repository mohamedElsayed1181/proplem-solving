// Product Class
class Car {
  constructor() {
    this.engine = null;
    this.color = null;
    this.wheels = null;
  }
}

// Builder Class
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  paintColor(color) {
    this.car.color = color;
    return this;
  }

  addWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build() {
    return this.car;
  }
}

// Usage
const car = new CarBuilder()
  .addEngine("V8")
  .paintColor("Red")
  .addWheels(4)
  .build();

console.log(car);
// Car { engine: 'V8', color: 'Red', wheels: 4 }
