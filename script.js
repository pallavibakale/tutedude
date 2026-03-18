arr1 = [
  5, 5, 8, 10, 679, 78, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

function compareDescending(a, b) {
  return b - a;
}

console.log("greatest number in arr1:", arr1.sort(compareDescending)[0]);

arr2 = [12, 4, 5, 6];
sum = 0;
arr2.forEach((element) => {
  sum += element;
});

console.log("sum of all elements in arr2:", sum);

arr3 = [1, 2, 3, 4, 5];
let oddNumbers = arr3.filter(function (element) {
  return element % 2 !== 0;
});

console.log("odd numbers in arr3:", oddNumbers.length);
