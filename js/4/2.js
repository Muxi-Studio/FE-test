/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let array=[];
    for (let i=0;i<(arr.length/size);){
        if (arr.length/size >= 1){
            let group=[];
            for (let i=0;i<size;i++){
            
            group.push(arr.shift()) ;
            
            }
            array.push(group);
            
            
        
    }
        if (arr.length===0){
            break;
        }
        
        if (arr.length/size < 1){
            let group=[];
            for (let i of arr){
                group.push(i);
            }
            array.push(group);
        
            break;
        };
    }
        
    
    return array;
    };
console.log(chunk([1,2,3,4,5], 1));
console.log(chunk([1,9,6,3,2],3));
console.log(chunk([1,2,3,4,5], 1)==[[1],[2],[3],[4],[5]])