
/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    // 返回 true 或 false
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i] % 13);
    }
    let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let arr2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let arr3 = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    let arr4 = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i])) {
            arr1.splice(arr1.indexOf(arr[i] % 13), 1);
        } else if (arr2.includes(arr[i])) {
            arr2.splice(arr2.indexOf(arr[i] % 13), 1);
        } else if (arr3.includes(arr[i])) {
            arr3.splice(arr3.indexOf(arr[i] % 13), 1);

        } else if (arr4.includes(arr[i])) {
            arr4.splice(arr4.indexOf(arr[i] % 13), 1);
        }

    }
}
