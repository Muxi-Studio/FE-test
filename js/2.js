/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    a = []
    for (let i = 0;i<arr.length;i+=size) {
        a.push(arr.slice(i,i+size,))
    }
    return a
};
console.log(chunk([1,2,3,4,5], 1))
/* ==[[1],[2],[3],[4],[5]] */