
/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    // 返回 true 或 false
    for (i = 0; i <= 3; i++) {
        if (arr.map(a => Math.floor(a / 13)).filter(a => a == i).length >= 5) {
            let temp = arr.filter(a => Math.floor(a / 13) == i)
            for (j = 0; j < temp.length; j++) {
                for (k = 0; k < temp.length - j; k++) {
                    let a
                    if (temp[k] < temp[k + 1]) {
                        a = temp[k]
                        temp[k] = temp[k + 1]
                        temp[k + 1] = a
                    }
                }
            }
            for (o = 0; o <= temp.length - 5; o++) {
                if (temp.includes(temp[o] - 1 && temp[o] - 2 && temp[o] - 3 && temp[o] - 4) || temp.includes(temp[o] - 1 && temp[o] - 2 && temp[o] - 3 && temp[o] - 12)) {
                    return true
                }
            }
        }
    }

    return false

}
function a(arr) {
    let temp = arr
    for (j = 0; j < temp.length; j++) {
        for (k = 0; k < temp.length - j; k++) {
            let a
            if (temp[k] > temp[k + 1]) {
                a = temp[k]
                temp[k] = temp[k + 1]
                temp[k + 1] = a
            }
        }
    }
    return temp
}
arr = [9, 10, 11, 12, 0, 20, 33];
console.log(hasStraightFlush(arr))
arr = [26, 27, 29, 33, 5, 12, 41];
console.log(hasStraightFlush(arr))
arr = [0, 14, 28, 42, 9, 23, 45];
console.log(hasStraightFlush(arr))