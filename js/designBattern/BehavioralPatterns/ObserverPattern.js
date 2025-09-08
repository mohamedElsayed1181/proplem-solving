class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(obs => obs(data));
  }
}

// الاستخدام
const subject = new Subject();

const observer1 = data => console.log("Observer 1 received:", data);
const observer2 = data => console.log("Observer 2 received:", data);

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello World"); 
// Observer 1 received: Hello World
// Observer 2 received: Hello World
