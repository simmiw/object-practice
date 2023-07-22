let num = {
  1: "one",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

document.getElementById("submit").addEventListener("click", function () {
  let inuptNumber = document.getElementById("numbers").value;
  document.getElementById("convertedString").innerHTML = num[inuptNumber];
});
