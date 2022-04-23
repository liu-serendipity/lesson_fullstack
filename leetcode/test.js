/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let num = map[s[i]];
        if (num< map[s[i + 1]]) {
            num = map[s[i + 1]] - num;
            i++; 
            sum += num;
        }else{
            sum += num;
        }
    }
    return sum;
};