let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(array);

array.sort(function (a, b) {
  return a - b;
});
console.log("sorted array(ascending);", array);

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let target = 31;
let result = binarySearch(array, target);
if (result !== -1) {
  console.log(`Value ${target} Found at index ${result}`)
} else {
  console.log(`Value ${target} Not found in array ${result}`)
}