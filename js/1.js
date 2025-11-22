/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
const a = [];
function flatten(arr) {
    for (let i =0;i<arr.length;i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i]);
        }else {
            a.push(arr[i]);
        }
    }
    return a;
}
console.log(flatten([[1,2,3,4],[1,[1,[1]]]]))
/* ==[1,2,3,4,1,1,1] */
