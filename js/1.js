/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flatten(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten([[1, 2, 3, 4], [1, [1, [1]]]]) == [1, 2, 3, 4, 1, 1, 1])
