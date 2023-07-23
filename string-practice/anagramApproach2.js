function anagram(value1, value2) {
  if (value1.length !== value2.length) {
    console.log("both strings are not of same length");
    return;
  }
  value1 = [...value1];
  value2 = [...value2];
  let obj = {};
  for (let i = 0; i < value1.length; i++) {
    if (obj[value1[i]]) {
      obj[value1[i]]++;
    } else {
      obj[value1[i]] = 1;
    }
  }
  for (let i = 0; i < value2.length; i++) {
    if (obj[value2[i]]) {
      obj[value2[i]]--;
    } else {
      console.log("False");
      return;
    }
  }
  console.log("True");
}

anagram("ayush", "husha");
