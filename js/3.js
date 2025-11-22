
/**
 * @param {Array} arr
 * @return {boolean}
 */
                             

    function LineGroup(arr)
        {for(var i=0;i<arr.length;i++)
            {for(var j=0;j<arr.length-1-i;j++)
                if(arr[j]>arr[j+1])
                    {var file=arr[j]
                     arr[j]=arr[j+1]
                     arr[j+1]= file  
                    }

                            }
        return arr                            }


        
    function IsSunZi(arr)
    {var count=1
        for(var i=1;i<arr.length;i++)
            {if(arr[i]==(arr[i-1]+1))
                {count+=1}
             else
                {count=1}
            
             if (count==5)
                {return true}


                            }
     return false 
                                                     }

    function hasStraightFlush(arr) {
        var blackPeach=[]
        var redPeach=[]
        var plumBlossom=[]
        var square=[]
        var NumToDic=['A','2','3','4','5','6','7','8','9','10','J','Q',"K"]
        var DicToPraticalnum={'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14}
        for (var i=0;i<7;i++)
            {if((0<=arr[i])&&(arr[i]<=12))
                {blackPeach.push(NumToDic[arr[i]])}
             if((13<=arr[i])&&(arr[i]<=25))
                {redPeach.push(NumToDic[arr[i]-13])}
             if((26<=arr[i])&&(arr[i]<=38))
                {plumBlossom.push(NumToDic[arr[i]-26])}
             if((39<=arr[i])&&(arr[i]<=51))
                {square.push(NumToDic[arr[i]-39])}
            }
        for(var i=0;i<blackPeach.length;i++)
                {blackPeach[i]= DicToPraticalnum[blackPeach[i]]}
        for(var i=0;i<blackPeach.length;i++)
                {redPeach[i]= DicToPraticalnum[redPeach[i]]}
        for(var i=0;i<blackPeach.length;i++)
                {plumBlossom[i]= DicToPraticalnum[plumBlossom[i]]}
        for(var i=0;i<blackPeach.length;i++)
                {square[i]= DicToPraticalnum[square[i]]}
        if (blackPeach.length>=5)
            {blackPeach=LineGroup(blackPeach)
             return IsSunZi(blackPeach) 




            }
        if (redPeach.length>=5)
            {redPeach=LineGroup(redPeach)
             return IsSunZi(redPeach) 




            }
        if (plumBlossom.length>=5)
            {plumBlossom=LineGroup(plumBlossom)
             return IsSunZi(plumBlossom) 




            }
        if (square.length>=5)
            {blackPeach=LineGroup(square)
             return IsSunZi(square) 




            }
        return false
    // 返回 true 或 false
}
                                  
console.log(hasStraightFlush([9,10,11,12,0,20,33]))