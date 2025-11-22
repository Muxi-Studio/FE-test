/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];
  for (i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([1, 2, 3, 4, 5], 1) == [[1], [2], [3], [4], [5]])