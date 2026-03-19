const division = (a, b) => {
  console.log("Diving " + a + " by " + b);
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero is not allowed.");
    }
    resolve(a / b);
  });
};

division(10, 2)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log(err));

division(10, 0)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log(err));

division(10, 3)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log(err));

division(30, 0)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log(err));

division(100, 5)
  .then((result) => console.log("Result: ", result))
  .catch((err) => console.log(err));
