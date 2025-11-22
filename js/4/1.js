/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function flatten(arr) {
    let array=[];
    function circle(arr){
        for (let i of arr){
            if (typeof(i)===typeof([1])){
                circle(i);
            }
            else {
                array.push(i);
            
            }
        }
        return array;
    }
    let res=circle(arr);
    return res;
    
  
}
////现在是16：54，我突然发现有给参考文档，>.<  ,  :)  
console.log(flatten([1, [2, [true, [4]]]]));


