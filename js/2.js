/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let current= [];
    for (let i = 0; i < arr.length; i++) {
        current.push(arr[i]);
        if (current.length==size||i==arr.length-1) {
            result.push(current);
            current = []; 
        }
    }
    return result;
};
console.log(chunk([1,2,3,4,5], 1))