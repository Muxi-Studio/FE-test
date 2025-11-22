/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {


        if (Array.isArray(arr[i])) {

            newarr = newarr.concat(flatten(arr[i]));
        }
        else {
            newarr.push(arr[i]);
        }


    }
    return newarr
}

console.log(flatten([[1, 2, 3, 4], [1, [1, [1]]]]))
