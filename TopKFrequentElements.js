//https://leetcode.com/problems/top-k-frequent-elements/submissions/983419901/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var customObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!customObj[nums[i]]) {
            customObj[nums[i]] = 1;
        }
        else {
            customObj[nums[i]] = customObj[nums[i]] + 1;
        }
    }
    
    return Object.keys(customObj).sort((a, b) => {
        return customObj[b] - customObj[a];
    }).splice(0, k);
};


console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1,3,3,3,6,6,8,9,4], 1));
console.log(topKFrequent([3,0,1,0], 1));

//this approach worked fine but - custom objs are my fav
// var topKFrequent = function(nums, k) {
//     var hash = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let valueExists = hash.get(nums[i]);
//         if (!valueExists) {
//             hash.set(nums[i], 1)
//         }
//         else {
//             let counter = valueExists;
//             counter = counter + 1;
//             hash.set(nums[i], counter)
//         }
//     }
//     Object.keys(hash)
    
//     return hash.values();
// };