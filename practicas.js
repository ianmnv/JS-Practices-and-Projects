// Tipos de Datos

// 1 Numericos

// Numero entero = + & -, -10, 5, 7, -20, 0
// Decimal = -5.2, 'float', 3.3, 9.7, 9,65

// 2 Texto

// Caracteres = 'a', 'b', 'c', '1'
// Cadena de carcteres = 'Hola', 'Adios', 'Marco', '20'
// String = str

// 3 Boolean - booleano - Logico
// Si o no, true or false

// 4 Undefined - Value taken by a variable that is not yet defined (empty value).

// 5 Null - Also an empty space

// 6 Symbol (ES2015) - Value that is unique and can't be changed

// 7 BigInt (ES2020) - Larger integers than the number type can hold

// VALUES & VARIABLES

// A value is basically a piece of data, the most fundamental unit of information that we have in programming

// Values = 'Ian', 'Canada', 'k', 1, 123, true, false

// The values you can store them into a variable, you declare a variable by giving it a name and storing a value into it.

let firstName = "Ian";

console.log(firstName);

firstName = "Marco";

const lastName = "Nava";

console.log(firstName);

// Forms to create a variable
// 1 let
// 2 const

// 3 var

// BASIC OPERATORS

// An operator allows us to transform values or combine multiple values.
// There are many categories of operators like mathematical, comparison, logical, assignment and many more.

// Mathematical Op.
const plusOf = 77 + 90;
let lessOf = 44 - 89;
let divideOf = 27 / 3;
let multipleOf = 3 * 3;
let powerOf = 2 ** 2; // 2 x 2 x 2

let now = 2022;
let birthday = now - 1994;
let myBirthday = now - 2000;

console.log(birthday, myBirthday);

console.log(powerOf);
console.log(plusOf);

// ESCRITURA DE VARIABLES (Day of the month)

// 1 Camel case - dayOfTheMonth = 27;
let dayOfTheMonth = 27;

// 2 Pascal Case - DayOfTheMonth = 27;

// 3 Snake Case - day_of_the_month = 27;

// 4 kebab case - day-of-the-month = 27;

////////////////////////////////////////////////////

// Assignment Operators

let suma = 10 + 20;

suma = suma + 50;
console.log(suma); // 80

suma += 50; // Dynamic typing
console.log(suma); // 130

suma += 44;
console.log("SUMA", suma); // 174
suma--;
console.log(suma);

let resta = 40;
resta -= 15;
console.log("RESTA", resta);

let multi = 9;
multi *= 5;
console.log("MULTI", multi);

let div = 10;
div /= 5;
console.log(div);

// COMPARISON OP.

let compara = 40 >= 100;
console.log(compara);

// < minus than
// > greater than
// <= minus or equal
// >= greater or equal

// STRINGS & TEMPLATE LITERALS
const customerName = "Ian Michel Nava";

const theStr = "Hello " + "my " + "name is " + "ian";

console.log(theStr);

const str2 = `Bienvenido ${customerName} a la pagina`; // backticks

console.log(str2);

//////////////////////////////////////////////////

console.log(`String
with
multiple
lines`);

console.log("String \n\
with \n\
multiple \n\
lines");

// IF / ELSE STATEMENT

const bobAge = 35;
const aliceAge = 29;

if (bobAge > aliceAge) {
  console.log("Alice is younger than Bob");
} else {
  console.log("Bob is younger than Alice");
}

let myEdad;

if (myEdad >= 21) {
  console.log(`You're old enough to enter`);
} else if (myEdad <= 20) {
  // ELSE IF
  console.log(`Sorry, you're too young 4 this page`);
} else {
  console.log("You enter an invalid number");
}

//////////////////////////////////////////////////////////
let Age = 46; // Numerico
var String = "students age"; // String o texto
let boolean = false; // Booleano
let undef; // Undifined
undef = 21;

let nulo = null; // Null

let younger_than_21;
younger_than_21 = 19;

let opSuma = 20 + 1;
let opRest = 22 - 1;

///////////////////////////////////////////////////////////
// Type conversion & Coercion
const inputYear = "1990";
console.log(
  typeof inputYear, // String
  inputYear, // '1990'
  typeof Number(inputYear), // Number
  Number(inputYear) // 1990
);

console.log(Number(inputYear));

const newNumber = Number(inputYear) + 22;
console.log(newNumber);

// const numRan = String(555);
// console.log(numRan);

//////////////
const myN = "22" - 5 * "2"; // The result is 12 because of the op. precedence
// where multiplication has a higher importance than minus sign
console.log(myN);

const thisIs = 80;

if (thisIs === 80) {
  console.log("This is the number 80");
} else {
  console.log("This is not the number");
}

const noTheNum = 21;

if (noTheNum !== 21) {
  console.log("You're still young");
} else {
  console.log("You're okay");
}

const day = "Saturdy";

switch (day) {
  case "Monday":
    console.log('Let"s relax');
    break;
  case "Tuesday":
    console.log("LFS and gym");
    break;
  case "Friday":
    console.log("Two classes");
    break;
  default:
    console.log("Invalid day");
}

// June 15th - PROJECT 'O JUCIES'

let orden1 = "jugo de naranja";
console.log(orden1);

// Difference between let and const

// undifined & null
let nuloo;
nuloo = 12;

let nulo2 = null;

const definido = null;
