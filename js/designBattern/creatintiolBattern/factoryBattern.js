// factory pattern
// "المصنع"
function animalFactory(type) {
  if (type === "dog") {
    return { sound: () => console.log("Woof 🐶") };
  }
  if (type === "cat") {
    return { sound: () => console.log("Meow 🐱") };
  }
}

// "العميل"
const dog = animalFactory("dog");
const cat = animalFactory("cat");

dog.sound(); // Woof 🐶
cat.sound(); // Meow 🐱
 
//how we use it in reactjs
import React from "react";

// نعرّف Components مختلفة
const TextInput = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} className="border p-2" />
);

const PasswordInput = ({ placeholder }) => (
  <input type="password" placeholder={placeholder} className="border p-2" />
);

const SubmitButton = ({ label }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded">{label}</button>
);

// "المصنع"
const InputFactory = ({ type, ...props }) => {
  switch (type) {
    case "text":
      return <TextInput {...props} />;
    case "password":
      return <PasswordInput {...props} />;
    case "submit":
      return <SubmitButton {...props} />;
    default:
      return null;
  }
};

// استخدام المصنع
export default function App() {
  return (
    <div className="space-y-4">
      <InputFactory type="text" placeholder="Enter your name" />
      <InputFactory type="password" placeholder="Enter your password" />
      <InputFactory type="submit" label="Login" />
    </div>
  );
}


// ✨ إيه اللي حصل هنا؟

// بدل ما تكتب <input type="text" /> في مكان و <input type="password" /> في مكان تاني → عندك مدخل موحّد اسمه InputFactory.

// كل اللي تعمله هو تبعت type="text" أو type="password" → المصنع يعرف إيه الـ component المناسب ويرجعه.

// ده يخلي الكود منظم وسهل التوسيع (لو بكرة عايز تضيف select أو checkbox، تزوده في المصنع وخلاص).

// 💡 كده بقى عندك "مصنع مكوّنات" بدل ما كل مرة تعيد نفس المنطق.