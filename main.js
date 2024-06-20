function toonemehfuc(arr, num) {
  let newArray = [...arr]; // Эхний массивыг хуулаад шинэ массив үүсгэнэ
  newArray.push(num); // Шинэ массив дээр тоог нэмнэ
  return newArray; // Шинэ массивыг буцаана
}
let toonemehArray = [1, 2, 4];
console.log("ehnii array:", toonemehArray);
let nemehNumber = 5;
let result1 = toonemehfuc(toonemehArray, nemehNumber);
console.log("too nemsen array:", result1); // Гаралт: [1, 2, 4, 5]
console.log("================");

// bodlogo 2 Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

function arrayvvsgehfuc(start, end) {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
}
let vvsgeharrayinurt = 5;
let result2 = arrayvvsgehfuc(1, vvsgeharrayinurt);
console.log("fuc-r vvssen array:", result2); // Гаралт: [1, 2, 3, 4, 5]
console.log("===============");

// bodlogo 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.

function calculateSumAndAverage() {
  let numbers = []; // Хоосон массив үүсгэнэ
  let sum = 0;
  let average = 0;

  // Хэрэглэгчийн тоог авах
  let input = prompt();
  // "Тоог оруулна уу (буцаана хийгээд, хоосон утга оруулахад авах хэсэг)"
  while (input !== "") {
    let number = parseInt(input); // Хэрэв хэрэглэгчийн оруулсан тэмдэгт биш байвал, буцаана хийнэ
    if (!isNaN(number)) {
      numbers.push(number); // Массив руу тоог нэмнэ
      sum += number; // Нийлбэр руу тоог нэмэх
    }
    input = prompt();
    //   "Тоог оруулна уу (буцаана хийгээд, хоосон утга оруулахад авах хэсэг)" // Дараагийн тоог авах
  }

  // Дундаж тоо олох
  if (numbers.length > 0) {
    average = sum / numbers.length;
  }

  // Нийлбэр болон дундаж тоог хэвлэх
  console.log("Таны оруулсан тоонууд:", numbers);
  console.log("Нийлбэр:", sum);
  console.log("Дундаж:", average);
}

// Функцыг дуудах
calculateSumAndAverage();
console.log("===========");

// bodlogo 4
// Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
function tomvsgeerehlvvleh(sentense) {
  let word = sentense.split(" ");
  let newword = "";
  for (i = 0; i < word.length; i++) {
    let fristword = word[i];
    let fristletter = fristword[0].toUpperCase();
    let resword = fristword.slice(1);
    newword += fristletter + resword + " ";
  }
  return newword;
}
let result3 = tomvsgeerehlvvleh("the quick brown fox output");
console.log(result3);
console.log("=============");
// bodlogo 5
//Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
// function reversetext(text) {
//   // text.split().reverse().jion();
//   let n = text.split("").reverse().jion("");
//   console.log("t", n);
// }

// let textarr = ["hello", "world", "javascript"];
// function reversearray(inputarr) {
//   let r = [];
//   for (let i = 0; i < inputarr.length; i++) {
//     console.log(reversetext(inputarr[i]));
//     r.push(reversetext(inputarr[i]));
//   }
//   return r;
// }

// let ra = reversearray(textarr);
// console.log(textarr);
// console.log(ra);

function reversetext(text) {
  let reversed = text.split("").reverse().join("");
  return reversed;
}

let textarr = ["hello", "world", "javascript"];

function reversearray(inputarr) {
  let r = [];
  for (let i = 0; i < inputarr.length; i++) {
    let reversedText = reversetext(inputarr[i]);
    console.log(reversedText);
    r.push(reversedText);
  }
  return r;
}

let ra = reversearray(textarr);
console.log(textarr);
console.log(ra);

// bodlog 6
// Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
let word = prompt("haih utgaa oruul");
let findarray = ["animal", "world", "dog"];
function findkeyword(arr, word) {
  let find = arr.includes(word);
  return find;
}
let result4 = findkeyword(findarray, word);
console.log("hailt:", result4);
console.log("==========");
// bodlogo 7
const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "cake",
    unitPrice: 2000,
    amount: 10,
    totalPrice: 20000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "cola",
    unitPrice: 1100,
    amount: 10,
    totalPrice: 11000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "candy",
    unitPrice: 500,
    amount: 15,
    totalPrice: 7500,
    casherId: 1,
    date: "2022-11-01",
  },
];
// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 1
let allprice = 0;
function caltotalprise(arr) {
  for (let i = 0; i < arr.length; i++) {
    allprice += arr[i].totalPrice;
  }
  return allprice;
}
console.log("Нийт борлуулалтын дүн:", caltotalprise(data));
console.log("==========");
// 2
let allamount = 0;
function caltotalamount(arr) {
  for (let i = 0; i < arr.length; i++) {
    allamount += arr[i].amount;
  }
  return allamount;
}
console.log("Нийт борлуулагдсан бараа:", caltotalamount(data));
console.log("==========");
// 3. Хамгийн их зарагдсан барааны жагсаалт харуулах
function getTopProductsByRevenue(data, count = 5) {
  // totalPrice-ээр бараануудыг эрэмбэлэх
  const sortedByRevenue = data.slice().sort((a, b) => b.amount - a.amount);
  // Эхний "count" ширхэг элементийг авах
  const topProducts = sortedByRevenue.slice(0, count);
  return topProducts[0];
}

// 4. Хамгийн бага зарагдсан барааны жагсаалт харуулах
function getBottomProductsBySales(data, count = 5) {
  // amount-аар бараануудыг эрэмбэлэх
  const sortedBySales = data.slice().sort((a, b) => a.amount - b.amount);
  // Эхний "count" ширхэг элементийг авах
  const bottomProducts = sortedBySales.slice(0, count);
  return bottomProducts[0];
}

console.log(
  "Хамгийн их зарагдсан барааны жагсаалт: ",
  getTopProductsByRevenue(data)
);
console.log("==========");
console.log(
  "Хамгийн бага зарагдсан барааны жагсаалт: ",
  getBottomProductsBySales(data)
);
