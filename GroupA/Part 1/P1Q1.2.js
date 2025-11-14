let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(array);

array.sort(function (a, b) {
  return a - b;
});
console.log("sorted array(ascending);", array);