/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let freq = {};
    for(let str of s) {
        freq[str] = (freq[str] || 0) + 1;
    }
    
    for(let str of t) {
        if(!freq[str]) {
            return false;
        } else {
            freq[str] -= 1;
        }
    }
    return true;
};