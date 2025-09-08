class APIService {
  fetchData() {
    console.log("Fetching data from API...");
    return { data: "Some Data" };
  }
}

// Proxy
class APIProxy {
  constructor() {
    this.apiService = new APIService();
    this.cache = null;
  }

  fetchData() {
    if (!this.cache) {
      this.cache = this.apiService.fetchData();
    } else {
      console.log("Returning data from cache...");
    }
    return this.cache;
  }
}

// الاستخدام
const api = new APIProxy();
console.log(api.fetchData()); // Fetching from API
console.log(api.fetchData()); // From cache










// الفكرة

// الـ Proxy بيكون زي الوكيل اللي بيتحكم في الوصول لكائن تاني.

// بيستخدم في: الأمان، الكاش، Lazy loading