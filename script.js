let sumNumber = 12;
let tableNumber = 12;
let primeNumber = 12;
let factorNumber = 12;
let digitSumNumber = 12;
let armstrongNumber = 153;

let sum = 0;
for (let i = 1; i <= sumNumber; i++) {
  sum += i;
}
console.log("Sum of " + sumNumber + " numbers is: " + sum);

console.log("Table of " + tableNumber);
for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " * " + i + " = " + tableNumber * i);
}

let isPrime = true;
if (primeNumber <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(primeNumber + " is a prime number");
} else {
  console.log(primeNumber + " is not a prime number");
}

console.log("Factors of " + factorNumber);
for (let i = 1; i <= factorNumber; i++) {
  if (factorNumber % i === 0) {
    console.log(i);
  }
}

let sumOfDigits = 0;
let digitTemp = digitSumNumber;
while (digitTemp > 0) {
  sumOfDigits += digitTemp % 10;
  digitTemp = Math.floor(digitTemp / 10);
}
console.log("Sum of digits of " + digitSumNumber + " is: " + sumOfDigits);

let sumOfCubes = 0;
let armstrongTemp = armstrongNumber;
while (armstrongTemp > 0) {
  let digit = armstrongTemp % 10;
  sumOfCubes += digit * digit * digit;
  armstrongTemp = Math.floor(armstrongTemp / 10);
}

console.log("Sum of cubes is: " + sumOfCubes);
if (sumOfCubes === armstrongNumber) {
  console.log(armstrongNumber + " is an armstrong number");
} else {
  console.log(armstrongNumber + " is not an armstrong number");
}
