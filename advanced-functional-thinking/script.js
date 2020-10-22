setTimeout(function () {
  console.log("WHERE IS THE LOVE");
}, 1);

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
let count = 13;
let something = setInterval(function () {
  //   console.log(count);
  console.log("This is in an interval");
  //   count--;
}, 1000);

// clearInterval(something);
setTimeout(function () {
  clearInterval(something);
}, 10000);
