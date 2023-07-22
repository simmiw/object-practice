const num = [1, 2, 3, 4, 5];

function reverseItems() {
  let newArray = [];
  for (let i = num.length - 1; i >= 0; i--) {
    newArray.push(num[i]);
  }
  console.log(newArray);
}
reverseItems();
