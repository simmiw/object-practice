function findUniqueCharacters(string) {
  let uniqueChar = new Set(string);
  return [...uniqueChar];
}
document.getElementById("ClicktoFind").addEventListener("click", function () {
  let inputValue = document.getElementById("inputString").value;
  let result = findUniqueCharacters(inputValue);
  result = result.join("");
  document.getElementById(
    "finduniqueletters"
  ).innerHTML = `Unique letters are: ${result}`;
});
