class PaypalStrategy {
  pay(amount) {
    console.log(`Paying ${amount}$ using PayPal`);
  }
}

class CreditCardStrategy {
  pay(amount) {
    console.log(`Paying ${amount}$ using Credit Card`);
  }
}

class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

// الاستخدام
const payment = new PaymentContext();

payment.setStrategy(new PaypalStrategy());
payment.pay(100); // Paying 100$ using PayPal

payment.setStrategy(new CreditCardStrategy());
payment.pay(200); // Paying 200$ using Credit Card
