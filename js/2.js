/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let newarr = [], temp = [];
    for (i = 0; i < arr.length; i++) {

        if (temp.length < size) {
            temp.push(arr[i])
        }
        else {
            newarr.push(temp)
            temp = []
            temp.push(arr[i])
        }


    }
    newarr.push(temp)
    return newarr

};
console.log(chunk([1, 2, 3, 4, 5], 1))
