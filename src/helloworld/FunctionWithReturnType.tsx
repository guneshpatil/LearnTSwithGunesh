// Specifying the type of a function parameter and return value

//Function to operate on 2 input numbers based on the opration passed
function numberOperations(
  firstNumber: number,
  secondNumber: number,
  operation: string
): number {
  switch (operation) {
    case "add":
      return firstNumber + secondNumber;
    case "minus":
      return firstNumber - secondNumber;
    case "multiply":
      return firstNumber * secondNumber;
  }
}

console.log(numberOperations(3234, 232, "minus"));
console.log(numberOperations(3234423, 223432, "add"));
console.log(numberOperations(5656, 9475, "multiply"));
