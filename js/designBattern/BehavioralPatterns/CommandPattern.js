class Light {
  on() { console.log("Light is ON"); }
  off() { console.log("Light is OFF"); }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

class Remote {
  submit(command) {
    command.execute();
  }
}

// الاستخدام
const light = new Light();

const turnOn = new Command(() => light.on());
const turnOff = new Command(() => light.off());

const remote = new Remote();
remote.submit(turnOn);  // Light is ON
remote.submit(turnOff); // Light is OFF
