class TrafficLight {
  constructor() {
    this.state = "red";
  }

  change() {
    if (this.state === "red") this.state = "green";
    else if (this.state === "green") this.state = "yellow";
    else this.state = "red";
    console.log(`Light is now ${this.state}`);
  }
}

// الاستخدام
const light = new TrafficLight();
light.change(); // green
light.change(); // yellow
light.change(); // red
