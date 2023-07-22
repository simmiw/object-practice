function isNumberDivisible(firstNumber, secondNumber) {
  if (firstNumber % secondNumber === 0) {
    document.getElementById("result").innerHTML = "True";
  } else {
    document.getElementById("result").innerHTML = "False";
  }
}

isNumberDivisible(5, 2);
