
/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    // 返回 true 或 false

    for (let item in arr) {
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;
        let counter4 = 0;
        if (item <= 12) {
            counter1++;
        }
        else if (12 < item <= 25) {
            counter2++;
        }
        else if (25 < item <= 38) {
            counter3++;
        }
        else if (38 < item <= 51) {
            counter4++;
        }

    }

    if (counter1 >= 5 || counter2 >= 5 || counter3 >= 5 || counter4 >= 5) {
        let judge1 = true;
    }
    if (judge1) {
        let result1 = arr.fliter((x) => item <= 12);
        let result2 = arr.fliter((x) => 12 < item <= 25);
        let result3 = arr.fliter((x) => 25 < item <= 38);
        let result4 = arr.fliter((x) => 38 < item <= 51);
    }
    

}
