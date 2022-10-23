"use strict";
// CODING CHALLENGE #1 & #2

// Data 1

const MarkW1 = 78;
const markH1 = 1.69;

const johnW1 = 92;
const johnH1 = 1.95;

let markBMI = MarkW1 / markH1 ** 2;
let johnBMI = johnW1 / (johnH1 * johnH1);

const MarkHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, MarkHigherBMI, "Data 1");

// CHALLENGE #2
if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`
  );
}

// Data 2

const markW2 = 95;
const markH2 = 1.88;

const johnW2 = 95;
const johnH2 = 1.76;

markBMI = markW2 / markH2 ** 2;
johnBMI = johnW2 / (johnH2 * johnH2);

const johnHigherBMI = johnBMI > markBMI;

console.log(markBMI, johnBMI, johnHigherBMI, "Data 2");

// CHALLENGE #2
if (johnBMI > markBMI) {
  console.log(
    `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
  );
}

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(hasDriverLicense && !hasGoodVision);

// CODING CHALLENGE #3

const data1Dol = (96 + 108 + 89) / 3;
const data1Ko = (88 + 91 + 110) / 3;

const bonus1D = (97 + 112 + 101) / 3;
const bonus1K = (109 + 95 + 123) / 3;

const bonus2D = (97 + 112 + 101) / 3;
const bonus2K = (109 + 95 + 106) / 3;

if (data1Dol > data1Ko) {
  console.log(
    `Dolphin wins by ${data1Dol - data1Ko} points!`,
    `${data1Dol} Dolp & ${data1Ko} Koa`
  );
} else if (data1Ko > data1Dol) {
  console.log(`Koalas wins by ${data1Ko - data1Dol} points!`);
} else {
  console.log(`It's a draw!`);
} // DATA 1

if (bonus1D > bonus1K && bonus1D >= 100) {
  console.log(`Dolphin wins by ${bonus1D - bonus1K} points!`, bonus1D, bonus1K);
} else if (bonus1K > bonus1D && bonus1K >= 100) {
  console.log(
    `Koalas wins by ${
      bonus1K - bonus1D
    } points! Koalas ${bonus1K} & Dolp ${bonus1D}`
  );
} else {
  console.log(`It's a draw!`);
} // BONUS 1

if (bonus2D > bonus2K && bonus2D >= 100) {
  console.log(`Dolphin wins by ${bonus2D - bonus2K} points!`, bonus2D, bonus2K);
} else if (bonus2K > bonus2D && bonus2K >= 100) {
  console.log(`Koalas wins by ${bonus2K - bonus2D} points!`, bonus2K, bonus2D);
} else {
  console.log(
    `It's a draw!`,
    `Koalas points ${bonus2K} & Dolp points ${bonus2D}`
  );
} // BONUS 2

// SWITCH STATEMENT
let dayy = "tuesday";

switch (dayy) {
  case "monday":
    console.log("Workout & work");
    break;
  case "tuesday":
    console.log("Rest and work");
    break;
  case "wednesday":
    console.log("Same as monday");
    break;
  case "thursday":
  case "friday":
    console.log("You re free my guy");
    break;
  case "saturday":
  case "sunday":
    console.log("Keep working (:(");
    break;
  default:
    console.log("Not a day");
}

// The Conditinal (Ternary) Operator

let age = 22;
age >= 19
  ? console.log("You can drink wine")
  : console.log("You re still young to drink wine");

const drink =
  age >= 19
    ? console.log("Let's go to the strip club!")
    : console.log("You ll have to wait some time to go to the strip club :(");

console.log(`I like to drink ${age <= 18 ? "water" : "wine"}`);

// CODING CHALLENGE #4

let tip;

tip = 275;

tip >= 50 && tip <= 300
  ? console.log(
      `The bill was for $${tip}, the tip was for $${
        tip * 0.15
      } & the total bill was for $${tip + tip * 0.15}`
    )
  : console.log(
      `The bill was for $${tip}, the tip was for $${
        tip * 0.2
      } & the total bill was for $${tip + tip * 0.2}`
    );

// FUNCTIONS

function logger() {
  console.log("My name is Ian");
}

logger();
logger();

// function fruitProcess(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples & ${oranges} oranges`;
//   return juice;
// }

// const myjuice = fruitProcess(2, 3);
// console.log(myjuice);

// --OR--

function fruitProcess(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples & ${oranges} oranges`;
  console.log(juice);
}

fruitProcess(2, 3);

function order11(meal1, meal2, meal3) {
  const lunch = `For breakfast I took a ${meal1}, then for lunch I had a ${meal2} with Renata, we shared it and by night I aet ${meal3}`;
  return lunch;
}

const mylunch = order11("sandwich", "poutine", "tiramisu");
const lunch2 = order11("salad", "pizza", "cereal");

console.log(mylunch);
console.log(lunch2);

// FUNCTION DECLARATIONS AND EXPRESSIONS

//Declaration
function calcAge(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge(1991);

// Expression
const calcAge1 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge1(1991);
console.log(age1, age2);

// ARROW FUNCTION
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRet = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} is going to retire in ${retirement} years`;
};

console.log(yearsUntilRet(2000, "Juan"));
console.log(yearsUntilRet(1989, "Lucas"));

// Functions calling other functions

const cutFruit = (fruit) => fruit * 4;

const fruitProcessor = function (apples, oranges) {
  const cutApples = cutFruit(apples);
  const cutOranges = cutFruit(oranges);
  const juice = `Juice with ${cutApples} pieces of apple & ${cutOranges} pieces of orange`;
  return juice;
};

console.log(fruitProcessor(2, 3));

// Reviewing functions
const calcuAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsToRetire = function (birthYear, firstName) {
  const theAge = calcuAge(birthYear);

  const retirement = 65 - theAge;

  if (retirement > 0) {
    console.log(`${firstName} is going to retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsToRetire(1970, "John"));
console.log(yearsToRetire(2000, "Franchesco"));

// Control & D will take multiple words at once

// CODING CHALLENGE #1

const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

const d1Dolp = calcAverage(44, 23, 71);
console.log(d1Dolp, "Dolp1");

const d1Koa = calcAverage(65, 54, 49);
console.log(d1Koa, "d1K");

const d2Dolp = calcAverage(85, 54, 41);
console.log(d2Dolp, "Dolp2");

const d2Koa = calcAverage(23, 34, 27);
console.log(d2Koa, "d2K");

function checkWinner(avgDolph, avgKoalas) {
  if (avgDolph >= 2 * avgKoalas) {
    return `Dolphins wins (${avgDolph} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolph) {
    return `Koalas wins (${avgKoalas} vs ${avgDolph})`;
  } else {
    return "Nobody wins (?)";
  }
}

console.log(checkWinner(d1Dolp, d1Koa));
console.log(checkWinner(d2Dolp, d2Koa));

// INTRODUCTION TO ARRAYS

const friends = ["Ian", "Lucas", "Erick", "Victor"];
console.log(friends);
console.log(friends[0], friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// To mutate a value from the array
friends[0] = "Marco";
console.log(friends);

// An array can hold different types of information
const firstName1 = "Ian";
const myself = [firstName1, "Nava", 2022 - 2000, friends];
console.log(myself);

const calcTheAge = function (birth) {
  return 2037 - birth;
};

const year = [1990, 1987, 2003, 2012, 1995];

const a = calcTheAge(year[0]);

const b = calcTheAge(year[1]);

const c = calcTheAge(year[year.length - 1]);

console.log(a, b, c);

const ages = [
  calcTheAge(year[0]),
  calcTheAge(year[1]),
  calcTheAge(year[year.length - 1]),
  calcTheAge(year[2]),
];
console.log(ages);

// Basic Array Operations (Methods)

const newFriends = ["Jay", "Jorge", "jacob"];
const newLength = newFriends.push("Clayton");
// friends.push() is to add at the end
console.log(newFriends);

console.log(newLength);
// print it like this and you'll get the length

// friends.unshift() is to add at the beginning
newFriends.unshift("Manuel");
console.log(newFriends);

// friends.pop() is to remove the last one & doesn't need an argment
newFriends.pop();
console.log(newFriends);

// friends.shift() to remove the first value
newFriends.shift();
console.log(newFriends);

// For pop() & shift() what you'll get in return is
// the name or number you removed but with push and unshift
// you'll get the length from them

// With indexOf() you get the position where the element is
// is in the array
console.log(newFriends.indexOf("Jay"));
console.log(newFriends.indexOf("jacob"));
console.log(newFriends.indexOf("J"));

//.includes were created in ES6 and instead of tells you the
// number where it is, it'll tell you wheater is there or not
// such as true or false

newFriends.push(22); // .includes do strict quality, which means
// it does not type coercion

console.log(newFriends.includes("Ian"));
console.log(newFriends.includes("jacob"));
console.log(newFriends.includes("22"));

// CODING CHALLENGE #2

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("bills", bills, "tips", tips, "total", total);

// Introduction to Objects

const meMyself = {
  firstName: "Ian",
  lastName: "Nava",
  job: "cook",
  age: 2022 - 2000,
  friends: ["Erick", "Lucas", "Manuel", "Aziz"],
};

console.log(meMyself);
console.log(meMyself.job);
console.log(meMyself["age"]);

const nameKey = "Name";
console.log(meMyself["first" + nameKey]);
console.log(meMyself["jo" + "b"]);

// const interestedIn = prompt("What you want to know about Ian?");

// if (meMyself[interestedIn]) {
//   console.log(meMyself[interestedIn]);
// } else {
//   console.log("Sorry, please choose between...");
// }

console.log(
  `${meMyself.firstName} is ${meMyself["age"]} years old, he's ${meMyself.job} at solo Pasta and has ${meMyself.friends.length} friends which ${meMyself.friends[0]} is his best friend`
);

meMyself.location = "Canada";
meMyself["instagram"] = "ian_mnv";
meMyself["favArtist"] = "Travis Scott";

console.log(meMyself);

// Object Methods

const girl = {
  firstName: "Alexandra",
  lastName: "Navarrete",
  job: "Marketing",
  birth: 2000,
  isSheOver20: true,

  // calcAge: function (birth) {
  //   return 2023 - birth;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birth;
  // },

  calcAge: function () {
    this.age = 2022 - this.birth;
    return this.age; // It works with or without the this keyword (age)
  },

  getSummary: function () {
    return `${this.firstName} ${this.lastName} works in ${
      this.job
    }. She was born in ${this.birth} so she is ${this.age} meaning she is ${
      this.isSheOver20 ? "over 20 years old" : "not over 20 years old"
    }`;
  },
};

girl.calcAge();
console.log(girl.getSummary());

// console.log(
//   `${girl.firstName} ${girl.lastName} works in ${girl.job}. She was born in ${
//     girl.birth
//   } so she is ${girl.age} meaning she is ${
//     girl.isSheOver20 === true ? "over 20 years old" : "not over 20 years old"
//   }`
// );

// console.log(girl.calcAge());

console.log(girl.age);
console.log(girl.age);
console.log(girl.age);

// console.log(girl["calcAge"](2000));

// CODING CHALLENGE #3

const mM = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jS = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mM.calcBMI();
jS.calcBMI();

const higherBMI = `${
  mM.calcBMI() > jS.calcBMI() ? mM.fullName : jS.fullName
}'s BMI (${
  mM.calcBMI() > jS.calcBMI() ? mM.calcBMI() : jS.calcBMI()
}) is higher than ${jS.calcBMI() < mM.calcBMI() ? jS.fullName : mM.fullName} (${
  jS.calcBMI() < mM.calcBMI() ? jS.calcBMI() : mM.calcBMI()
})`;

console.log(higherBMI);
console.log(mM.bmi, jS.bmi);

// Iteration: The for Loop

// for loop keeps running while condition is true!
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, breaking & continuing
const ian = [
  true,
  555,
  222,
  "ian_mnv",
  ["Erick", "Dewin", "Lucas", "Reyna"],
  22 + 11,
  "Nava",
];

const types = [];
// You cannot put the empty array after the for loop because it cannot be accessed before initialization

for (let i = 0; i < ian.length; i++) {
  //Reading from ian array
  console.log(ian[i], typeof ian[i]);

  // Filling an empty array (types)
  // types[i] = typeof ian[i];
  types.push(typeof ian[i]);
  // Better to do it with push because it's cleaner
}

console.log(types);

const years1 = [2000, 1996, 2002, 1995];
const ageOf = [];

for (let i = 0; i < years1.length; i++) {
  ageOf.push(2022 - years1[i]);
}

console.log(ageOf);

// Continue & Break
console.log("--- Only strings with continue ---");

for (let i = 0; i < ian.length; i++) {
  if (typeof ian[i] !== "string") continue;

  console.log(ian[i], typeof ian[i]);
}
// Do an exersice for continue, loop and break

console.log("--- Break with numbers ---");
for (let i = 0; i < ian.length; i++) {
  if (typeof ian[i] === "number") break;

  console.log(ian[i], typeof ian[i]);
}

console.log("Exersice---");
const nuevaArray = [
  "Ian",
  "Marco",
  "Edgar",
  2323,
  555,
  888,
  true,
  false,
  10 - 9,
  true,
  false,
  "Cesar",
  "Napoleon",
];

for (let i = 0; i < nuevaArray.length; i++) {
  if (typeof nuevaArray[i] === "boolean") break;
  console.log(nuevaArray[i], typeof nuevaArray[i]);
}

console.log("Exersice---");

for (let i = 0; i < nuevaArray.length; i++) {
  if (typeof nuevaArray[i] !== "string") break;
  console.log(nuevaArray[i], typeof nuevaArray[i]);
}

console.log("Exersice---");

for (let i = 0; i < nuevaArray.length; i++) {
  if (typeof nuevaArray[i] !== "string") continue;
  console.log(nuevaArray[i], typeof nuevaArray[i]);
}

console.log("Exersice---");

for (let i = 0; i < nuevaArray.length; i++) {
  if (typeof nuevaArray[i] !== "boolean") continue;
  console.log(nuevaArray[i], typeof nuevaArray[i]);
}

const wArray = [];
for (let i = 0; i <= 10; i++) {
  wArray[i] = i;
}

console.log(wArray);

// function printNum() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNum();

// Looping backwards and Loops in Loops

// Looping backwards
const someA = [1, false, 234, 55 - 50, "Marco", true, "Ian"];
// const anArr = [];
// for (let i = someA.length - 1; i >= 0; i--) {
//   // console.log(someA[i]);
//   anArr.push(someA[i]);
// }
// console.log(anArr);

for (let i = someA.length - 1; i >= 0; i--) {
  console.log(i, someA[i]);
}

// Loop in Loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Exercise number ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(
      `Exercise number ${exercise}: Lifting weights repetition ${rep}`
    );
  }
}

// The while loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;

while (rep <= 5) {
  console.log(`WHILE: repetition #${rep}`);
  rep++;
}

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Found the ${dice}`);
// }

// CODING CHALLENGE #4

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

const recibo = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const prop = [];
const totales = [];

for (let i = 0; i < recibo.length; i++) {
  prop.push(calcTip(recibo[i]));

  totales.push(calcTip(recibo[i]) + recibo[i]);
}

console.log("Recibos", recibo);
console.log("Prop", prop);
console.log("Totales", totales);

// Bonus:

const calcAv = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAv([5, 10, 15]));
console.log(calcAv(prop));
console.log(calcAv(totales));
