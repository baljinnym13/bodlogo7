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
// bodlogo 5
//Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
function reversetext(text) {
  // text.split().reverse().jion();
  let n = text.split("").reverse().jion("");
  console.log("t", n);
}

let textarr = ["hello", "world", "javascript"];
function reversearray(inputarr) {
  let r = []
  for (let i = 0; i < inputarr.length; i++) {
    console.log(reversetext(inputarr[i]));
    r.push(reversetext(inputarr[i]))
  }
  return r;
}
let ra = 