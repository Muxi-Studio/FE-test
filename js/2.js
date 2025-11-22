/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = []
    for (i = 0;i < arr.length ;i+=size){
        let check =arr.slice(i,i + size)
        result.push(check)
    }
    return result
};
console.log(JSON.stringify(chunk([1,2,3,4,5], 1))==JSON.stringify([[1],[2],[3],[4],[5]]))