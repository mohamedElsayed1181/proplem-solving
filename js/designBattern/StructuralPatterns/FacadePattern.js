class CPU {
  start() {
    console.log("CPU started");
  }
}
class Memory {
  load() {
    console.log("Memory loaded");
  }
}
class HardDrive {
  read() {
    console.log("HardDrive reading");
  }
}

// Facade
class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer started successfully ✅");
  }
}

// الاستخدام
const pc = new Computer();
pc.startComputer();






// بيعمل واجهة سهلة للتعامل مع نظام معقد.

// بدل ما تنادي دوال كتير → تنادي دالة واحدة بسيطة.