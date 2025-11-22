/**
 * 将多层嵌套数组转换为一维数组
 * @param {any[]} arr 
 * @returns {any[]}
 */
function ArrayIn(arr){
            flag=false
            for(var i=0;i<arr.length;i++)

            {if (Array.isArray(arr[i]))
                flag=true


                    }
            return flag


        }
function flatten(arr) {
            while(ArrayIn(arr))
            {
                    let newarr=[]
                    for(var i =0;i<arr.length;i++)
                        {if (Array.isArray(arr[i]))
                                {for(var j=0;j<arr[i].length;j++)
                                    newarr.push(arr[i][j])

                                            }
                        else
                            
                            
                            newarr.push(arr[i])
                            
                        

                                }
                    arr=newarr
                                            }
           
            return arr             
            }
console.log(flatten([[1,2,3,4],[1,[1,[1]]]]))    