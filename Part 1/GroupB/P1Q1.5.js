let array = [3, 5, 11, 14, 16, 19, 20, 23, 25, 30, 45];
console.log(array);
function sequentialSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

let target = 23;
let result = sequentialSearch(array, target);

if (result !== -1) {
  console.log(`value ${target} found at index ${result}`);
} else {
  console.log(`value ${target} not found in array`);
}