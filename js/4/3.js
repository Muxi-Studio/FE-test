
/**
 * @param {Array} arr
 * @return {boolean}
 */
//0  12
//13 25
//26 38
//39 51
function hasStraightFlush(arr) {
    let group1=[0,1,2,3,4,5,6,7,8,9,10,11,12];
    let group2=[13,14,15,16,17,18,19,20,21,22,23,24,25];
    let group3=[26,27,28,29,30,31,32,33,34,35,36,37,38];
    let group4=[39,40,41,42,43,44,45,46,47,48,49,50,51];


    for(let i=0;i<6;i++){
        
        for(let z=i+1;z<7;z++){
            if(arr[i]>arr[z]){
                let sam=arr[i];
                arr[i]=arr[z];
                arr[z]=sam;
            }
            
        }
        
        
    }//从小到大排序

    function lianxu (arr,n){
        if(arr[n]===arr[n+1]-1 && arr[n]===arr[n+2]-2 && arr[n]===arr[n+3]-3 && arr[n]===arr[n+4]-4 ){
            return 1;
        }
        else return 0;
    }//判断是否连续
    function tongse (arr,n){
        if (group1.indexOf(arr[n])!==(-1) && group1.indexOf(arr[n+4])!==(-1)){
            return 1;
        }
        else if (group2.indexOf(arr[n])!==(-1) && group2.indexOf(arr[n+4])!==(-1)){
            return 1;
        }
        else if (group3.indexOf(arr[n])!==(-1) && group3.indexOf(arr[n+4])!==(-1)){
            return 1;
        }
        else if (group4.indexOf(arr[n])!==(-1) && group4.indexOf(arr[n+4])!==(-1)){
            return 1;
        }
        
        else return 0;
    }//判断是否同色且连续

    //不考虑10，j，q，k，A
    function type1 (arr){
        for(let i=0;i<3;i++){
            if(lianxu(arr,i)){
                if(tongse(arr,i)){
                    return 1;
                }
            }
        }
        return 0;
        
    }

    //0  12
    //13 25
    //26 38
    //39 51

function type2(arr){
    for (let i=0;i<=39;i+=13){
        if (arr.indexOf(i)!=(-1) &&  arr.indexOf(i+9)!=(-1) &&  arr.indexOf(i+10)!=(-1) &&  arr.indexOf(i+11)!=(-1) && arr.indexOf(i+12)!=(-1) ){
            return true;            
        }
        
    }

    return false;
}

    //不考虑10，j，q，k，A
    
    //考虑

        if(type1(arr)){
            return true;
        }
        else {
            return type2(arr);
        }
     
    


    
    // 返回 true 或 false
}

console.log(hasStraightFlush([0, 14, 28, 42, 9, 23, 45]));
