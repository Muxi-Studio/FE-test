/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let number = [arry[i]];
    let count = 0;
    for (let i = 0; i < size; i++) {
        i = i - size + i;
        count = count + 1;
    }
    return (arry[i]);
   size =size +count*size;
};
return number;
console.log(chunk([1, 2, 3, 4, 5], 1) == [[1], [2], [3], [4], [5]])