/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   let isSolutionFound = false;
   let firstIndex, secondIndex;
    for (var i = 0; i < nums.length; i++) {
        if (isSolutionFound) break;
        for (var j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] + nums[j] === target) 
            {
                isSolutionFound = true;
                firstIndex = i;
                secondIndex = j;
                break;
            }
        }
   }
   return isSolutionFound ? [firstIndex, secondIndex] : [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))