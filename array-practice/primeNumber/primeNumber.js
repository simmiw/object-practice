document
  .getElementById("clickToCheckPrime")
  .addEventListener("click", function () {
    let inputNumber = document.getElementById("inputNum").value;
    if (inputNumber < 2) {
      document.getElementById("result").innerHTML = "False";
    } else {
      let limit = Math.ceil(Math.sqrt(inputNumber));
      document.getElementById("result").innerHTML = "True";
      for (let i = 2; i < limit; i++) {
        if (inputNumber % i === 0) {
          document.getElementById("result").innerHTML = "False";
          break;
        }
      }
    }
    document.getElementById("inputNum").value = "";
  });
