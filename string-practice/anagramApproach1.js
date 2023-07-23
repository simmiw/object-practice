function anagram(value1, value2) {
  if (value1.length !== value2.length) {
    console.log("both strings are not of same length");
    return false;
  }
  value1 = [...value1].sort().join("");
  value2 = [...value2].sort().join("");
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}
let output = anagram("many", "myan");
console.log(output);
