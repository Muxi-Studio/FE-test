
/**
 * @param {Array} arr
 * @return {boolean}
 */
function hasStraightFlush(arr) {
    let huase_group = {};
    for (let card of arr) {
        let huase = Math.floor(card / 13);
        if (!huase_group[huase]) {
            huase_group[huase] = [];
        }
        let dianshu = card % 13;
        huase_group[huase].push(dianshu);
    }
    for (let huase in huase_group) {
        let all_Dianshu = huase_group[huase];
        if (all_Dianshu.length < 5) continue;
        let quchongDianshu = [...new Set(all_Dianshu)];
        quchongDianshu.sort((a, b) => a - b);



        for (let i = 0; i <= quchongDianshu.length - 5; i++) {
            let lianxuWuzhang = quchongDianshu.slice(i, i + 5);
            if (lianxuWuzhang[4] - lianxuWuzhang[0] === 4) {
                return true;
            }
        }
        if (quchongDianshu.includes(0) && quchongDianshu.includes(1) && quchongDianshu.includes(2) && quchongDianshu.includes(3) && quchongDianshu.includes(4)) {
            return true;
        }
    }

    return false;
}
