document.getElementById("clickMe").addEventListener("click", function () {
  let enteredvalue = document.getElementById("inputNum").value;
  let numArray = [];
  for (let i = enteredvalue; i >= 1; i--) {
    numArray.push(i);
    let output = numArray.sort((a, b) => {
      return a - b;
    });
  document.getElementById("result").innerHTML=`Output is: ${output}`;
  }
});
