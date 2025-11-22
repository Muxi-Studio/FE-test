/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
  // let result = [];
  // for (let item of arr) {
  //   if (Array.isArray[item]) {
  //     result.push(flatten(item));
  //   }
  //   result.push(item);
  // } return result;
  //  let flattened=arr.reduce((accumulator,currentValue)=>accumulator.concat(currentValue), []);
  // return flattened;
  let result = [];
  for (let item of arr) {
    if (Array.isArray[item]) {
      result.push(...flatten(item));
    }
    result.push(item);
  } return result;
}
console.log(flatten([[1, 2, 3, 4], [1, [1, [1]]]]) == [1, 2, 3, 4, 1, 1, 1])
