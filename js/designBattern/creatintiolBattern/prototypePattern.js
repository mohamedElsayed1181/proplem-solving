// نعمل كائن Prototype
const carPrototype = {
  drive() {
    console.log(`🚗 Driving a ${this.brand} ${this.model}`);
  },
};

// نعمل كائن جديد معتمد على الـ Prototype
function createCar(brand, model) {
  const newCar = Object.create(carPrototype);
  newCar.brand = brand;
  newCar.model = model;
  return newCar;
}

// نستخدمه
const car1 = createCar("Toyota", "Corolla");
const car2 = createCar("Tesla", "Model S");

car1.drive(); // 🚗 Driving a Toyota Corolla
car2.drive(); // 🚗 Driving a Tesla Model S






// 🔸 هنا:

// carPrototype فيه الميثود المشتركة drive.

// createCar بيعمل نسخة جديدة من الكائن ويعدل القيم الخاصة بيه.

// كدا وفرنا تكرار الكود.