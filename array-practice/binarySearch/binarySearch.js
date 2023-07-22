let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

document.getElementById("findNumber").addEventListener("click", function () {
  let inputNumber = +document.getElementById("inputNumber").value;

  var start = 0;
  var end = num.length - 1;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    if (inputNumber === num[mid]) {
      document.getElementById("result").innerHTML =
        "Number is found in the list!";
      return;
    } else if (inputNumber > num[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    document.getElementById("inputNumber").value= " ";
  }
  
  document.getElementById("result").innerHTML =
    "Number is not found in the list!";
    
});
