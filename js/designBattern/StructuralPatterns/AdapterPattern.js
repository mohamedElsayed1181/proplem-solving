// كود قديم بيستخدم متر
class OldMeasurement {
  getLengthInMeters() {
    return 5;
  }
}

// الكود الجديد عايز الطول بالسنتيمتر
class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  getLengthInCentimeters() {
    return this.oldSystem.getLengthInMeters() * 100;
  }
}

// الاستخدام
const oldMeasure = new OldMeasurement();
const adapter = new Adapter(oldMeasure);

console.log(adapter.getLengthInCentimeters()); // 500 cm







// الفكرة

// بيعمل ترجمة (Adapter) بين كود موجود وكود جديد.

// زي فيشة كهرباء 3 طرفة وعايز توصلها بمقبس 2 طرفة → محتاج محول.