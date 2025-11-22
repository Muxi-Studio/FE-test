/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    // 返回 true 或 false
    let colorOne=[], colorTwo=[], colorThree=[], colorFour=[],newArr=[7];
    let color1=0,color2=0,color3=0,color4=0;

    for(let i=0;i<6;i++){
        for(let j=0;j<6-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    for(let i=0;i<7;i++){
        if(arr[i]>=0&&arr[i]<=12){
            colorOne.push(arr[i]);
            color1++
        }
        else if(arr[i]>=13&&arr[i]<=25){
            colorTwo.push(arr[i]);
            color2++
        }
        else if(arr[i]>=26&&arr[i]<=38){
            colorThree.push(arr[i]);
            color3++
        }
        else if(arr[i]>=39&&arr[i]<=51){
            colorFour.push(arr[i]);
            color4++
        }
    }

    if(color1>=5){
        for(let i=0;i<colorOne.length;i++){
            colorOne[i]=colorOne[i]%13;
        }
        if(colorOne[0]===colorOne[1]-1&&colorOne[1]===colorOne[2]-1&&colorOne[2]===colorOne[3]-1&&colorOne[3]===colorOne[4]-1){
            return true;
        }
        if(colorOne[0]===0&&colorOne[colorOne.length-4]===9&&colorOne[colorOne.length-3]===10&&colorOne[colorOne.length-2]===11&&colorOne[colorOne.length-1]===12){
            return true;
        }
    }

    if(color2>=5){
        for(let i=0;i<colorTwo.length;i++){
            colorTwo[i]=colorTwo[i]%13;
        }   
        if(colorTwo[0]===colorTwo[1]-1&&colorTwo[1]===colorTwo[2]-1&&colorTwo[2]===colorTwo[3]-1&&colorTwo[3]===colorTwo[4]-1){
            return true;
        }
        if(colorTwo[0]===0&&colorTwo[colorTwo.length-4]===9&&colorTwo[colorTwo.length-3]===10&&colorTwo[colorTwo.length-2]===11&&colorTwo[colorTwo.length-1]===12){
            return true;
        }
    }

    if(color3>=5){
        for(let i=0;i<colorThree.length;i++){
            colorThree[i]=colorThree[i]%13;
        }
        if(colorThree[0]===colorThree[1]-1&&colorThree[1]===colorThree[2]-1&&colorThree[2]===colorThree[3]-1&&colorThree[3]===colorThree[4]-1){
            return true;
        }
        if(colorThree[0]===0&&colorThree[colorThree.length-4]===9&&colorThree[colorThree.length-3]===10&&colorThree[colorThree.length-2]===11&&colorThree[colorThree.length-1]===12){
            return true;
        }
    }

    if(color4>=5){
        for(let i=0;i<colorFour.length;i++){
            colorFour[i]=colorFour[i]%13;
        }
        if(colorFour[0]===colorFour[1]-1&&colorFour[1]===colorFour[2]-1&&colorFour[2]===colorFour[3]-1&&colorFour[3]===colorFour[4]-1){
            return true;
        }
        if(colorFour[0]===0&&colorFour[colorFour.length-4]===9&&colorFour[colorFour.length-3]===10&&colorFour[colorFour.length-2]===11&&colorFour[colorFour.length-1]===12){
            return true;
        }
    }

    return false;
}

console.log(hasStraightFlush([0,1,2,3,4,13,22]))
