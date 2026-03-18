arr1 = [
  5, 5, 8, 10, 679, 78, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

console.log("greatest number in arr1:", arr1.sort((a, b) => b - a)[0]);
sum = 0;
arr1.forEach((element) => {
  sum += element;
});

console.log("sum of all elements in arr1:", sum);

let oddNumbers = arr1.filter((element) => element % 2 !== 0);

console.log("odd numbers in arr1:", oddNumbers.length);
