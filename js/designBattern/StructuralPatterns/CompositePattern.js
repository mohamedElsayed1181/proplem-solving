class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.subordinates = [];
  }

  add(employee) {
    this.subordinates.push(employee);
  }

  show(indent = 0) {
    console.log(" ".repeat(indent) + `${this.name} - ${this.position}`);
    this.subordinates.forEach(emp => emp.show(indent + 2));
  }
}

// الاستخدام
const ceo = new Employee("Ahmed", "CEO");
const manager = new Employee("Ali", "Manager");
const developer = new Employee("Omar", "Developer");

ceo.add(manager);
manager.add(developer);

ceo.show();
// Ahmed - CEO
//   Ali - Manager
//     Omar - Developer






// الفكرة

// يخليك تعامل المجموعة والكائن الفردي بنفس الطريقة.

// زي شجرة (Tree): الفرع يحتوي أوراق، وكلهم بيتعاملوا بنفس الشكل.