class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.authenticated) {
      console.log("Auth failed ❌");
      return;
    }
    console.log("Auth passed ✅");
    return super.handle(request);
  }
}

class DataHandler extends Handler {
  handle(request) {
    if (!request.data) {
      console.log("No data ❌");
      return;
    }
    console.log("Data processed ✅");
    return super.handle(request);
  }
}

// الاستخدام
const auth = new AuthHandler();
const data = new DataHandler();

auth.setNext(data);

auth.handle({ authenticated: true, data: "User Data" });
// Auth passed ✅
// Data processed ✅
