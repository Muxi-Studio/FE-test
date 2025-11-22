/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i += size;
    }
    return result;

}
console.log(chunk([1, 2, 3, 4, 5], 1));