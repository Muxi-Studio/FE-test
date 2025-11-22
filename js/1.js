/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
  let result = arr.reduce((acc, val) =>{
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
  return result;
}
console.log(flatten([[1,2,3,4],[1,[1,[1]]]]));
