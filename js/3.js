
/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    let count1=0;
    let count2=0;
    let count3=0;
    let count4=0;
    for(let number of arr){
        if(0<=number<=12){
            count1+=1
        }else if(13<=number<=25){
            count2+=1
        }else if(26<=number<=38){
            count3+=1
        }else if(39<=number<=51){
            count4+=1
        }
    }
    if(count1==5||count2==5||count3==5||count4==5){
        return true
    }
}
arr = [9, 10, 11, 12, 0, 20, 33];