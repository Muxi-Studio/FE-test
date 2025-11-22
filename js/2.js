/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
        var chunk = function(arr, size) {
            if (arr.length==0)
                {   var newarr=[]
                    
                    return newarr}
            if (arr.length<=size)
                {var newarr=[]
                 newarr.push(arr)
                 return newarr
                }    
            var newarr=[]
            var filearr=[]
            var count=1
            for(var i=0;i<arr.length;i++)
                {if (count%size!=0)
                    {filearr.push(arr[i])}
                 else
                    {filearr.push(arr[i])
                     newarr.push(filearr)
                     filearr=[]

                    }
                count+=1


                }
            newarr.push(filearr)
            if (newarr[newarr.length-1].length==0)
             {newarr.pop()}
            return newarr
                                      };

console.log(chunk([1,2,3,4,5], 1))
console.log(chunk([1,2,3,4,5], 2))
console.log(chunk([1,2,3,4,5], 5))
console.log(chunk([1,2,3,4,5], 12))
console.log(chunk([], 12))
console.log(chunk([1,2,3,4,5], 1)==[[1],[2],[3],[4],[5]])
console.log(chunk([1,2,3,4,5], 1)==[[1],[2],[3],[4],[5]])