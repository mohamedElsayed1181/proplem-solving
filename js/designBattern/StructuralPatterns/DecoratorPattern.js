class Coffee {
  cost() {
    return 5;
  }
}

// Decorator لإضافة حليب
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 2;
  }
}

// Decorator لإضافة شوكولاتة
class ChocolateDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 3;
  }
}

// الاستخدام
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new ChocolateDecorator(coffee);

console.log(coffee.cost()); // 10




// بدل ما تغير الكود الأصلي → تقدر تزود له إمكانيات إضافية ديناميكياً.