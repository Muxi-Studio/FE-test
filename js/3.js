
/**
 * @param {Array} arr
 * @return {boolean}
 */


function hasStraightFlush(arr) {
    let v=[];
        f=[];
        n=[];
        m=[];
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]<=12 && arr[i]>=0) {
            v.push(arr[i]);
        }else if (arr[i]<=25 && arr[i]>=13) {
            f.push(arr[i]);
        }else if (arr[i]<=26 && arr[i]>=38) {
            n.push(arr[i]);
        }else {
            m.push(arr[i]);
        }
    }
    if (v.length>=5) {
        let vv =0;
        for (let j = 0;j<v.length;j++) {
            if (v[j]==v[j+1]-1) {
                vv++;
            }
        }return haha(vv);
    }else if (f.length>=5) {
        let ff =0;
        for (let o = 0;o<f.length;o++) {
            if (f[o]==f[o+1]-1) {
                ff++;
            }
        }return haha(ff)
    }else if (n.length>=5) {
        let nn =0;
        for (let p = 0;p<n.length;p++) {
            if (n[p]==n[p+1]-1) {
                nn++;
            }
        }return haha(nn)
    }else if (m.length>=5) {
        let mm =0;
        for (let e = 0;e<m.length;e++) {
            if (m[e]==m[e+1]-1) {
                mm++;
            }
        }return haha(mm)
    }else {
        return false
    }
function haha(k) {
    if (k>=4) {
        return true
    }
}
    
    
}
console.log(hasStraightFlush([7,8,9,10,11,12,20,]));

// 返回 true 或 false
