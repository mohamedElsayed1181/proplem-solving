// مثال على السنجلتون باترن
class singlton {
  constractor() {
    if (singlton.instance) {
      return singlton.instance;
    }
    singlton.instance = this; // احفظها هنا
    this.data = "انا النسخه الوحيده";
  }
}

const a = new singlton();
const b = new singlton();

console.log(a === b); //true beacuase its singlton battern
console.log(a.data); // انا النسخه الوحيده
console.log(a.data); //انا النسخه الوحيده
