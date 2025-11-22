/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
    let number =[];
    for(let item of arr){
        if (arr.inarr(item)){
            result.push(arry.inarry(item));
        }else return (item);
    }
    return(number)
}
console.log(flatten([[1,2,3,4],[1,[1,[1]]]])==[1,2,3,4,1,1,1])
