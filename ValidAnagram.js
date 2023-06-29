//https://leetcode.com/problems/valid-anagram/submissions/982024784/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//return true if t is an anagram of s
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let tSplit = t.split('');
    let sSplit = s.split('');
    let i = 0;
    while(sSplit.length > 0) {
        let indexOfSearchChar = tSplit.indexOf(sSplit[i]);
        if (indexOfSearchChar !== -1) {
            sSplit.splice(i, 1);
            tSplit.splice(indexOfSearchChar, 1)
        }
        else 
            break;
    }
    return sSplit.length === 0;
};

console.log(isAnagram("aacc", "ccac"))
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("a", "ab"))