// // 3. Write a JavaScript program to get the current date.

// var today = new Date();
// var dd = today.getDate();
// // console.log(dd);
// var mm = today.getMonth() + 1;
// // console.log(mm)
// var yy = today.getFullYear();
// // console.log(yy);
// console.log(dd, mm, yy);

// . Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7
// 1/2 القاعده*الارتفاع

// var side1=5;
// var side2=6;
// var side3=7;

// var pramiter=(side1+side2+side3)/2;
// var area=Math.sqrt(pramiter*((pramiter-side1)*(pramiter-side2)*(pramiter-side3)));
// console.log(area);

// function animate_string(id){

//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0];
//   var text = textNode.data;
// }

// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0];
//   var text = textNode.data;
//   setInterval(function () {
//     text = [text.lenth - 1] + text.subString(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0]; // assuming no other children
//   var text = textNode.data;

//   setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// let year = window.prompt("please enter your year");
// if (year  % 100 === 0 && year  % 400 === 0 && year  % 4 === 0) {
//   console.log("your year is a leep year");
// } else {
//   console.log("your year is not a leep year");
// }

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10,
// and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// var num = Math.ceil(Math.random * 10);
// var gnum = window.prompt("please enter your number from 1 to 10");
// if (gnum == num) {
//   console.log("Good Work");
// } else {
//   console.log("Not matched, the number was " + gnum);
// }

// today = new Date();

// const currentYear = today.getFullYear();
// crsm = new Date(currentYear, 11, 25);

// if (today > crsm) {
//   crsm.setFullYear(currentYear + 1);
// }

// const timeDeffrent = crsm - today;
// const daysLeft = Math.ceil(timeDeffrent / (1000 * 60 * 60 * 24));
// console.log(daysLeft);

// let x = window.prompt("please inter your firist number ");
// let y = window.prompt("please inter your second number ");

// function multi() {
//   console.log(x * y);
// }

// function divi() {
//   console.log(x / y);
// }
// let x = window.alert(document.URL);

// 15. Write a JavaScript program to get the difference between a given number and 13,
//  if the number is broader than 13 return double the absolute difference.
// var num =window.prompt('please enter your number')
// if (num<=13) {
//     console.log((13-num));
// } else {
//     console.log((num-13)*2);
// }
// 16-. Write a JavaScript program to compute the sum
// of the two given integers. If the two values are the same, then return triple their sum.

// let num1 =Math.ceil(window.prompt('please enter your num1'));
// let num2 =Math.ceil(window.prompt('please enter your num2'));
// let avr=num1+num2
// console.log(avr);
// if (num1==num2) {
//     console.log((num1+num2)*3);
// }
// 17

// 18. Write a JavaScript program to check
// a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
// let num1 =Math.ceil(window.prompt('please enter your num1'));
// let num2 =Math.ceil(window.prompt('please enter your num2'));
// if ((num1||num2==50)||(num1+num2==50)) {
// console.log(true);
// } else {
//     console.log("not a true");
// }

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
// let num1 =Math.ceil(window.prompt('please enter your num1'));
// let num2 =Math.ceil(window.prompt('please enter your num2'));

// if (num1||num2>0) {
//     console.log('your number is negative');
// }else{
//     console.log('your number is positive');
// }
// حل تانى

// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0)
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));
// 21. Write a JavaScript program to create another
// string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// function stringCheck(str1){

// if (str1===null||str1===undefined||str1.substring(0,2)==='py') {
//     return str1
// }

// return 'py'+str1

// }
// console.log(stringCheck("Python"));
// // console.log(stringCheck("thon"));

// 22. Write a JavaScript
// program to remove a character at the specified position in a given string and return the modified string.
// let  xx=['ahmed','ali','m7md','osamaa','salma','omar'];
// let yy=xx.slice(1,6)
// console.log(yy);

// 23-Write a JavaScript program to create a new string from a given string by changing the position
// of the first and last characters. The string length must be broader than or equal to 1.

// function change(str){

// if (str.length<1) {
//     console.log(ffffffff);
//     return str
// }
// if (str.length===1) {
//     return str
// }
// let firist=str[0]
// let last=str[str.length-1]
// let middel=str.slice(1,-1)
// let newString = last + middel + firist;
// return newString
// }
// console.log(change('hellow'));

// 24. Write a JavaScript program to
// create another string from a given string with the first character of the given string added to the front and back.

// function frontBack(str){
// firist=str.substring(0,1);
// return firist+str+firist
// }
// console.log(frontBack('m7md'));

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

// function test(x){
//     if (x%3==0||x%7==0) {
// return true
//     }else{
//      return false
//     }
// }
// console.log(test(20));

// 26. Write a JavaScript program to create a string from a given string. This is done .
// by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more
// function frontBack(str){
//     frist=str.substring(1,5)
//     return frist+str+frist
// }
// console.log(frontBack('abcdefgh'));

// function front_back3(str)
//  {
//   if (str.length>=3)
//    {
//    str_len = 3;

//   back = str.substring(str.length-3);
//    return back + str + back;
//  }
//    else
//      return false;
//  }
// console.log(front_back3("abc"));
// console.log(front_back3("ab"));
// console.log(front_back3("abcd"));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
// function frontBack(str){

// if (str.lenght<4) {
//   console.log(false);
// }
// front=str.substring(0,4)
// if (front=="java") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// }
// console.log(frontBack('javaScript'));

// 28. Write a JavaScript program to check whether
// two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

// function checkNumber(x, y) {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }
// checkNumber(70,100 )

// 29. Write a JavaScript program to check whether three given
// integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

// function checkNumber(x, y, z) {
//     if ((x>=50&&x<=99||y>=50&&y<=99||z>=50&&z<=99)) {
//         console.log(true);
//     }else{
//              console.log(false);
//            }
// }
// checkNumber(60, 40, 90)

// 1-using axios
// function fetchUserWithAxios() {
//   return axios
//     .get(apiUrl)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// 2-using async/await
// async function fetchUserWithAsyncAwait() {
//   try {
//     const data = await fetch(apiUrl);
//     const response = await data.json();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

// 3-using Promises
// function fetchUserWithPromise() {
//   fetch(api)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// 30. Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position
// in a given string. If " Script" appears in the string, return the string without "Script"
// otherwise return the original one.
// function checkAndRemoveScript(str) {
//   // التحقق مما إذا كان طول السلسلة كافيًا
//   if (str.length >= 11) {
//     // استخراج الجزء الفرعي من الفهرس 4 إلى 10
//     let substring = str.substring(4, 11);
//     // التحقق مما إذا كان الجزء الفرعي هو " Script"
//     if (substring === " Script") {
//       // إزالة " Script" من السلسلة
//       return str.substring(0, 4) + str.substring(11);
//     }
//   }
//   // إعادة السلسلة الأصلية إذا لم يتحقق الشرط
//   return str;
// }

// // أمثلة للاختبار
// console.log(checkAndRemoveScript("Java Script is fun")); // الناتج: "Java is fun"
// console.log(checkAndRemoveScript("JavaScripts are fun")); // الناتج: "JavaScripts are fun"
// console.log(checkAndRemoveScript("Hello Script World")); // الناتج: "Hello Script World"
// console.log(checkAndRemoveScript("Java Script")); // الناتج: "Java"

// 31. Write a JavaScript program to find the largest of three given integers.
// function findLargest(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// // اختبار الدالة
// console.log(findLargest(10, 20, 30)); // 30
// console.log(findLargest(50, 20, 30)); // 50
// console.log(findLargest(10, 70, 30)); // 70
// حل تانى
// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
//   }
//   console.log(findLargest(10, 20, 30)); // 30
//   console.log(findLargest(50, 20, 30)); // 50
//   console.log(findLargest(10, 70, 30)); // 70

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.
// function findClosestTo100(a, b) {
//     const diffA = Math.abs(100 - a);
//     const diffB = Math.abs(100 - b);

//     if (diffA < diffB) {
//       return a;
//     } else if (diffB < diffA) {
//       return b;
//     } else {
//       return "Both values are equally close to 100";
//     }
//   }

//   // اختبار الدالة
//   console.log(findClosestTo100(90, 110)); // 90
//   console.log(findClosestTo100(99, 101)); // 99
//   console.log(findClosestTo100(80, 120)); // 80
//   console.log(findClosestTo100(95, 105)); // 95
//   console.log(findClosestTo100(100, 100)); // Both values are equally close to 100

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
// function numbers_ranges(x, y) {
//   if (
//     (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//     (x >= 70 && x <= 100 && y >= 70 && y <= 100)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numbers_ranges(44, 56));
// console.log(numbers_ranges(70, 95));
// console.log(numbers_ranges(50, 89));

// 34. Write a JavaScript program to
// find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
// function max_townums_range(x, y){
//   if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
//   if(x === y){
//   return "Numbers are the same";
//   }else if (x > y){
//   return x;
//   }else{
//   return y;
//   }
//   }else{
//   return "Numbers don't fit in range";
//   }
//   }

//   console.log(max_townums_range(45, 60));
//   console.log(max_townums_range(25, 60));
//   console.log(max_townums_range(45, 80));

// (function(){
//   })();

//   (function(){

//   })()

//   (function(){

//   }())

{
  /* <script>
    const theme=localStorge.getItem('themث')
    if (them==="dark"){
        const root =document.documentElement;
        root.style.setProperty('--bg-color','#ffff')
        root.style.setProperty('--title-color','#0000')
        root.style.setProperty('--thead-color','blue')

    }
//</script> */
}

// :root{
//     --bg-color:#ffff;
//     --title-color:#0000;
//     --thead-color:blue;
// }

// const num =[2,3,4,5]

// console.log(num.last());

// closures
// function randomFunc(){
//     var obj1 = {name:"Vivian", age:45};

//     return function(){
//       console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

//     }
//   }

//   var initialiseClosure = randomFunc(); // Returns a function

//   initialiseClosure();

/////////////////// codewars
// //////////evenodd
// 1-function evenOdd (value){
//     return value %2==0?'even':'odd'
// }

// console.log(evenOdd(10));

// 2-you get of array of numbers return the sum of all of the positive ones if there is nothing to sum return 0

// const arr=[1,2,-3,4,5,-6]

// function positiveNumber(arr){
// let sum =0     return arr.filter((x)=>x>0).reduce((acc,curr)=>acc+curr,0)

// for(i=0; i<arr.length; i++){
// if(arr[i]>0){
//     sum+=arr[i]
// }
// }
// return sum
// }
// console.log(positiveNumber(arr));

// function repeatestring(number,str){
//     return str.repeat(number)
// }
// console.log(repeatestring(3,' hello '));

// let array = [10, 20, 5, 30,30, 15];
//  let maxValue=Math.max(...array);

//  let minValue = Math.min(...array);

//  console.log(maxValue);
//  console.log(minValue);

//  let sortArray=array.slice().sort((a, b) => a - b);
//  let minValue = sortArray[0];

// let maxValue = sortArray[sortArray.length - 1];
// let result=maxValue+minValue
// console.log(result);

// traning stack
// 1-
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(value) {
//     this.items.push(value);
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "stack is empty";
//     } else {
//       return this.items.pop();
//     }
//   }

//   peek() {
//     return this.isEmpty()
//       ? "stack is empty"
//       : this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());
// console.log(stack.peek())
// console.log(stack.size());

// 2-reverse any string
// function reversestring(str) {
//   let stack = [];

//   //هنا نا عديت على كل حرف موجود ف الاسترنج وعملتله بوش ف الاستاك
//   for (let char of str) {
//     stack.push(char);
//   }
//   //هنا انا عملت مكان فاضى استقبل فيه الاسترنج ال هخرجه من الاستاك
//   let reversed = "";

//   while (stack.length > 0) {
//     reversed += stack.pop();
//   }
//   return reversed;
// }

// console.log(reversestring("mohamed"));

// 3-balanced
// function isBalanced(str) {
//   const stack = [];  // مكدس لتخزين الأقواس المفتوحة
//   const pairs = { ')': '(', '}': '{', ']': '[' };  // خريطة تربط كل قوس مغلق بالقوس المفتوح المقابل له

//   for (let char of str) {  // التكرار على كل حرف في النص
//     if (['(', '{', '['].includes(char)) {
//       stack.push(char);  // إذا كان الحرف قوسًا مفتوحًا، نضيفه إلى المكدس
//     } else if ([')', '}', ']'].includes(char)) {
//       if (stack.length === 0 || stack.pop() !== pairs[char]) {
//         return false;  // إذا كان المكدس فارغًا أو لم يكن القوس متطابقًا، فالنص غير متوازن
//       }
//     }
//   }

//   return stack.length === 0;  // إذا كان المكدس فارغًا، فالنص متوازن
// }

// console.log(isBalanced("{[()]}")); // true
// console.log(isBalanced("{[(])}")); // false
// console.log(isBalanced("{[()]()}")); // true

// 4-عدد عشرى لثنائى
// function decimalToBinary(number) {
//   let stack = [];

//   while (number > 0) {
//     stack.push(number % 2);
//     number = Math.floor(number / 2);
//   }

//   let binaryString = "";

//   while (stack.length > 0) {
//     binaryString += stack.pop();
//   }

//   return binaryString || "0";
// }

// console.log(decimalToBinary(10)); // "1010"
// console.log(decimalToBinary(25)); // "11001"
// console.log(decimalToBinary(0));  // "0"

// function MaxCardCount(n, card) {
//   let totalPower = 0;
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//       if (totalPower + card[i] >= 0) {
//           totalPower += card[i];
//           count++;
//       } else {
//           break;
//       }
//   }

//   return count;
// }

// // Example usage:
// const n = 6;
// const card = [4, 5, -3, -3, 1, -1];
// console.log(MaxCardCount(n, card));  // Output: 5

// function sortingArray(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     //العنصر ال ف الان سورتد ال هيتحط ف السورتد
//     let key = arr[i];
//     //ال ج هو العنصر ال قببل ال كاى يعنى العنصر ال ف السورتد
//     let j = i - 1;

//     while (j >= 0 && arr[i] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = key;
//   }
//   return arr;
// }

// let numbwers=[4,2,1,3]
// console.log(sortingArray(numbwers));

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i]; // العنصر الحالي الذي سيتم إدخاله في الجزء المرتب
//         let j = i - 1;

//         // إزاحة العناصر الأكبر إلى اليمين لفتح مكان للعنصر الحالي
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         // وضع العنصر في موضعه الصحيح
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// // 🛠️ تجربة الكود
// let numbers = [4, 2, 1, 3];
// console.log(insertionSort(numbers)); // 🔥

// recursion
// function countdown(n) {
//     if (n <= 0) { // شرط التوقف
//         console.log("تم الوصول إلى الصفر!");
//         return;
//     }
//     console.log(n);
//     countdown(n - 1); // استدعاء الدالة نفسها
// }

// countdown(5);
// //  5
// //  4
// //3
// //2
// //1
// ///تم الوصول إلى الصفر!
//////////////////
//binary search
//arr دا هو الاراى ال بنبحث فيه
//target دا هو العنصر ال بنبحث عنه
// function binarySearchLearn(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] <  target) {
//         left = mid + 1; // البحث في النصف الأيمن

//     }else {
//         right = mid - 1; // البحث في النصف الأيسر
//     }
//   }
//   return -1;
// }

// const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
// console.log(binarySearchLearn(arr, 23)); // 🟢 النتيجة: 5 (الموقع داخل المصفوفة)
// console.log(binarySearchLearn(arr, 50)); // 🔴 النتيجة: -1 (العنصر غير موجود)

// المساله الخاصه بالصب اراى بتتحل بالسليدنج وندو

// You are given an array nums consisting of positive integers.

// We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

// Return the length of the longest nice subarray.

// A subarray is a contiguous part of an array.

// Note that subarrays of length 1 are always considered nice.

// Example 1:

// Input: nums = [1,3,8,48,10]
// Output: 3

// var longestNiceSubarray = function(nums) {
//   let left = 0, currentAND = 0, maxLength = 0;

//   for (let right = 0; right < nums.length; right++) {
//       // إذا كان أي رقم داخل النافذة يكسر الشرط، نحرك left للأمام
//       while ((currentAND & nums[right]) !== 0) {
//           currentAND ^= nums[left]; // إزالة تأثير nums[left]
//           left++; // تقليل حجم النافذة
//       }

//       // إضافة العنصر الجديد للنافذة
//       currentAND |= nums[right];

//       // تحديث أقصى طول تم العثور عليه
//       maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// };

// // 🛠️ **اختبار الحل**
// console.log(longestNiceSubarray([1,3,8,48,10])); // 🟢 النتيجة المتوقعة: 3
// console.log(longestNiceSubarray([3,1,5,11,13])); // 🟢 النتيجة المتوقعة: 1
// console.log(longestNiceSubarray([2,2,2]));       // 🟢 النتيجة المتوقعة: 1

//insertion sort algorithm
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i]; // العنصر الحالي الذي نريد إدراجه في المكان الصحيح
//     let j = i - 1;

//     // تحريك العناصر الأكبر إلى اليمين لإفساح المجال للعناصر الأصغر
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j]; // نقل العنصر إلى اليمين
//       j--; // الانتقال إلى العنصر السابق
//     }

//     // إدراج العنصر الحالي في المكان الصحيح
//     arr[j + 1] = current;
//   }

//   return arr;
// }

// // ✅ تجربة الكود
// console.log(insertionSort([8, 4, 3, 7, 6, 2, 5]));
// // 🔹 الناتج: [2, 3, 4, 5, 6, 7, 8]
//////////////////////////////////////////
// Selection sort algoritm analysis
// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     // البحث عن أصغر عنصر في الجزء غير المرتب
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j; // تحديث الحد الأدنى
//       }
//     }

//     // التبديل بين العنصر الأول في الجزء غير المرتب وأصغر عنصر
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }

//   return arr;
// }

// // تجربة الكود
// let numbers = [64, 25, 12, 22, 11];
// console.log(selectionSort(numbers)); // [11, 12, 22, 25, 64]

// function selectionSort(arr) {
//   let n=arr.length; // طول المصفوفة
//   // i=بدايخ الاراى ف الجزء الغير مرتب
//   //بقله n-1 علشان العنصر الاخير يكون ف مكانه الصحيح
//   //minIndex=بيشيل الموقع ال بيكون فيه اصغر عنصر ف الجزء ال مش مترتب
//   for(let i=0;i<n-1;i++){
//     let minIndex=i;

//   }
// }
//

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//           if (arr[j] > arr[j + 1]) {
//               // تبديل القيم
//               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           }
//       }
//   }
//   return arr;
// }

// // تجربة الكود
// console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

// recrsive Binary Search

// function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
//   if (left > right) {
//     return -1; // العنصر غير موجود
//   }

//   let mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) {
//     return mid; // وجدنا العنصر
//   } else if (arr[mid] > target) {
//     return recursiveBinarySearch(arr, target, left, mid - 1); // البحث في النصف الأيسر
//   } else {
//     return recursiveBinarySearch(arr, target, mid + 1, right); // البحث في النصف الأيمن
//   }
// }

// // 📝 **تجربة الكود**
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
// console.log(recursiveBinarySearch(sortedArray, 7)); // ✅ النتيجة: 3
// console.log(recursiveBinarySearch(sortedArray, 14)); // ❌ النتيجة: -1 (غير موجود)

// Merge Sort
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // إذا كان هناك عنصر واحد فقط، لا نحتاج إلى الترتيب
//   }

//   // 1. تقسيم المصفوفة إلى نصفين
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   // 2. دمج النصفين بترتيب
//   return merge(left, right);
// }

// // دالة الدمج التي تدمج مصفوفتين مرتبتين في مصفوفة واحدة مرتبة
// function merge(left, right) {
//   let sortedArray = [];
//   let i = 0,
//     j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       sortedArray.push(left[i]);
//       i++;
//     } else {
//       sortedArray.push(right[j]);
//       j++;
//     }
//   }

//   // إضافة العناصر المتبقية (إن وجدت)
//   return sortedArray.concat(left.slice(i)).concat(right.slice(j));
// }

// // تجربة الكود
// let array = [8, 3, 5, 1, 7, 6, 2, 4];
// console.log(mergeSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8]
////////////////////////

// async function getData() {
//   return await Promise.resolve('ali')
// }

// const data =  getData()
// console.log(data)

//quick sort algorithm
// function quickSort(arr) {
//   if (arr.length <= 1) return arr; // حالة التوقف

//   const pivot = arr[arr.length - 1]; // نختار آخر عنصر كمحور
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);  // عناصر أقل من المحور
//     } else {
//       right.push(arr[i]); // عناصر أكبر أو تساوي المحور
//     }
//   }

//   // نكرر نفس العملية ونجمع النتيجة
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // مثال على الاستخدام
// const numbers = [7, 2, 1, 6, 8, 5, 3, 4];
// const sorted = quickSort(numbers);
// console.log(sorted); // [1, 2, 3, 4, 5, 6, 7, 8]

//countingsortAlgorithm

// function countingSort(arr) {
//   if (arr.length === 0) return [];

//   // 1. إيجاد أكبر قيمة في المصفوفة
//   const max = Math.max(...arr);

//   // 2. إنشاء مصفوفة العد (count array) وتصفيرها
//   const count = new Array(max + 1).fill(0);

//   // 3. عدّ ظهور كل عنصر
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]]++;
//   }

//   // 4. إعادة بناء المصفوفة الأصلية باستخدام العد
//   let sortedArr = [];
//   for (let i = 0; i < count.length; i++) {
//     while (count[i] > 0) {
//       sortedArr.push(i);
//       count[i]--;
//     }
//   }

//   return sortedArr;
// }

// let arr = [4, 2, 2, 8, 3, 3, 1];
// let sorted = countingSort(arr);
// console.log(sorted); // [1, 2, 2, 3, 3, 4, 8]

////////////////////////////////////////
// stack



// class MinStack {
//   constructor() {
//     this.stack = [];    //main stack
//     this.minStack = [];
//   }

//   push(val) {
//     this.stack.push(val);
//     const min = this.minStack.length === 0
//       ? val
//       : Math.min(val, this.minStack[this.minStack.length - 1]);
//     this.minStack.push(min);
//   }

//   pop() {
//     this.stack.pop();
//     this.minStack.pop();
//   }

//   top() {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin() {
//     return this.minStack[this.minStack.length - 1];
//   }
// }





// class MinStack{
//   constructor(){
//     this.stack=[];
//     this.minStack=[];
//   }

// push(val){
// this.stack.push(val)
// const min=this.minStack.length===0?val:Math.min(val,this.minStack[this.minStack.length-1])
// this.minStack.push(min)
// }
// pop(){
// this.stack.pop()
// this.minStack.pop()
// }

// top(){
//     return this.stack[this.stack.length - 1];
// }

//   getMin() {
//     return this.minStack[this.minStack.length - 1];
//   }
// }
// const s = new MinStack();
// s.push(5);  
// s.push(3);  
// s.push(7);  
// s.push(2);
// console.log(s.getMin());  
// s.pop(); 


// console.log(s.getMin()); 

// console.log(s.top());