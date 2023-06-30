/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let eachAnagram = [];
    for (let i = 0; i < strs.length; i++) {

        eachAnagram[i] = [strs[i]];

        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue

            //finding the anagram
            let wordLookingForAnagrams = strs[i].split("");
            let isItAnAnagram = strs[j].split("");
           
            //if they are of different lenth, there's no point continuing
            if (wordLookingForAnagrams.length !== isItAnAnagram.length) {
                continue;
            }
            else {
                let atleastOneItemNotFound = false;
                while (wordLookingForAnagrams.length > 0) {
                    let letterExists = isItAnAnagram.indexOf(wordLookingForAnagrams[0]);
                    if (letterExists !== -1) {
                        wordLookingForAnagrams.splice(0, 1)
                        isItAnAnagram.splice(letterExists, 1)
                    }
                    else {
                        atleastOneItemNotFound = true;
                        break;
                    }
                }
                if (!atleastOneItemNotFound && wordLookingForAnagrams.length === 0) {
                    eachAnagram[i].push(strs[j]);
                }
            }
        }
    }
    return flattenAnagram(eachAnagram);
};

var flattenAnagram = function (eachAnagram) {
    for (let i = 0; i < eachAnagram.length; i++) {
        for (let j = 0; j < eachAnagram.length; j++) {
            if(i === j) continue;
            if (eachAnagram[i] && eachAnagram[j] && JSON.stringify(eachAnagram[i].sort()) === JSON.stringify(eachAnagram[j].sort())) {
                eachAnagram.splice(j , 1)
            }
        }
    }
    return eachAnagram;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", "", ""]));
console.log(groupAnagrams(["h","h","h"]));
console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]));