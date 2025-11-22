/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];

  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    result.push(chunk);
  }
  return result;
};
console.log(chunk([1, 2, 3, 4, 5], 1) == [[1], [2], [3], [4], [5]])