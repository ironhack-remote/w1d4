// setTimeout(function () {
//   console.log("WHERE IS THE LOVE");
// }, 1);

console.log("Hello");

function name(arrayOfNamex) {
  console.log(arrayOfNamex);
}

const oneTwoThree = 123;
name(oneTwoThree);

[1, 2, 3].forEach(function (element) {
  console.log(element);
});

function welcomeMessage(name) {
  return `Welcome ${name}`;
}

const log = console.log;
log(welcomeMessage("Vincenzo"));

const greetings = function (name) {
  return `Greetings ${name}`;
};

const greetings2 = (name) => {
  return `Greetings ${name}`;
};

const greetings3 = (name) => `Greetings ${name}`;

function greetings4(name) {
  return `GReetings ${name}`;
}

const greetingsGosia = greetings3("Gosia");
console.log("greetingsGosia:", greetingsGosia);

console.clear();

console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 2000);

log("3");

// setTimeout(function () {
//   console.log("4");
// }, 1);

console.clear();
// let count = 13;
// let something = setInterval(function () {
//   //   console.log(count);
//   console.log("This is in an interval");
//   //   count--;
// }, 1000);

// // clearInterval(something);
// setTimeout(function () {
//   clearInterval(something);
// }, 10000);

// let count = 60;

// let clock = setInterval(() => {
//   log(count);
//   count--; // count = count - 1
// }, 1000);

// setTimeout(() => {
//   clearInterval(clock);
// }, 61000);

console.clear();

// forEach( function (element, index, array))
log([1, 2, 3, 4, 5].reverse());

("John");
("nhoJ");
let string = "John";
let somethingElse = string.split("");
console.log("string:", string);

console.clear();

// map
// filter
// reduce // was intended to ALAWAYS return array

log("John".split("").reverse().join(""));
const array = ["Alex", "Marc", "Filipe"];
// array.forEach(function (element) {
//   console.log(element);
// });

const arra2 = [1, 2, 3];
// arra2.forEach(function (element) {
//   console.log("element:", element);
// });
// console.log("array:", arra2);

const arr3 = array.map((element, index, a) => {
  return {
    name: element,
  };
});

console.log(arr3);

console.clear();

const array99 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = array99.filter(function (element) {
  return element % 2 === 0;
});
console.log("evenNumbers:", evenNumbers);
const students = [
  "franck",
  "alex",
  "milena",
  "dimitri",
  "francisco",
  "gosia",
  "hugo",
  "marc",
  "marcel",
  "marta",
  "maxim",
  "monique",
  "pauline",
  "querien",
  "rosana",
  "sophie",
  "vincenzo",
];

const startWithM = students.filter(function (element) {
  return element[0] === "m";
});
console.log("newArray:", startWithM);

// console.log(arra2);

console.clear();

// forEach -> currentlement, index, array
// map -> currentelement, index, array
// filter -> currentElement, index, array
// reduce -> accumulatar, currentElement, index, array

const arrayOfAges = [25, 26, 27];
let sumOfAges = 0;
for (let key of arrayOfAges) {
  sumOfAges += key;
}

// const sum = arrayOfAges.reduce(function (accumulator, element) {
//   console.log("ACCUMULATOR", accumulator);
//   console.log("ELEMENT", element);
//   console.log("-------------------");
//   return element;
// });

//
//

//
//
//
const array789 = [1, 2, 3];

function map(array, fancy) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const something = fancy(array[i], i, array);
    arr.push(something);
  }
  return arr;
}

function callBackFun() {}

map(array789, callBackFun);

function filter(array, callbackFn) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const something = callbackFn(array[i], i, array);
    if (something) {
      arr.push(something);
    }
  }
  return arr;
}

const doubles = [1, 2, 3].map(function (element, index, array) {
  return element * 2;
});

const newDoubles = map([1, 2, 3], function (element) {
  return element * 2;
});

console.clear();

// To be clear this isnt perfect, but this would be the solution for the reduce method:
// im going to write a bigger way so you can see the clear seperations
function reduce(array, callback, starting) {
  let finalVal = null;
  let acc = null;
  let current = null;
  if (starting) {
    acc = starting;
    for (let i = 0; i < array.length; i++) {
      current = array[i];
      const call = callback(acc, current, i, array);
      acc = call;
    }
    finalVal = acc;
  } else {
    acc = array[0];
    // here i remove 1 from the length, because i am adding the length to current value
    for (let i = 0; i < array.length - 1; i++) {
      current = array[i + 1];
      const call = callback(acc, current, i, array);
      acc = call;
    }
    finalVal = acc;
  }

  return finalVal;
}

const sumOfNumbers = [1, 2, 3, 4].reduce(function (acc, val) {
  return acc + val;
}, -1);

const francisco = ["F", "r", "a", "n", "c", "i", "s", "c", "o"];

const aName = francisco.reduce(function (acc, val) {
  const newLetter = acc + val;
  return newLetter;
}, "");

console.log("aName:", aName);
console.log("sumOfNumbers:", sumOfNumbers);

console.clear();

const sortingAges = [27, 35, 52, 9, 10];

console.log(
  sortingAges.sort(function (a, b) {
    return a - b;
  })
);

console.log(["pauline", "marcel", "marta", "Zeus"].sort());
