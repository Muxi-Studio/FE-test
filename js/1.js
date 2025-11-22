/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
  let result = []
  for (let num of arr) {
    if (Array.isArray(num)) {
      result.push(...flatten(num))
    } else {
      result.push(num)
    }
  }
  return result
}
console.log(flatten([[1, 2, 3, 4], [1, [1, [1]]]]))
