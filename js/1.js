/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
  let blank = []
  for (let item of arr){
    if(Array.isArray(item)){
        blank.push(...flatten(item))
    }
    else blank.push(item)
  }
  return blank
}
console.log(JSON.stringify(flatten([[1,2,3,4],[1,[1,[1]]]]))==JSON.stringify([1,2,3,4,1,1,1]))
//  return [value, ...listToArray(rest)]