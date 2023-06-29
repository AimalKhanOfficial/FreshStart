/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //Improved version - HashMaps?
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++) { 
        myMap.set(nums[i], nums[i])
    }
    return myMap.size !== nums.length;
  
    // This works - Runtime: 71 ms
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i === j) continue;
    //         if (nums[i] === nums[j]) {
    //             return true;
    //         }
    //     }
    // }
    // return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
