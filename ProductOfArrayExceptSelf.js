/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let finalProduct = 1;
    let finalProductArray = [];
    for (let i = 0; i < nums.length; i++) {
        finalProduct = 1;
        let anotherCounter = i;
        while (anotherCounter < nums.length) {
            if (anotherCounter === i) anotherCounter++;
            if (anotherCounter > nums.length) break;
            finalProduct *= nums[anotherCounter];
            anotherCounter++;
        }
        finalProductArray.push(finalProduct);
    }
    return finalProductArray;
};

console.log(productExceptSelf([1,2,3,4]), 'should be equal to: ', [24,12,8,6])
console.log(productExceptSelf([-1,1,0,-3,3]), 'should be equal to: ', [0,0,9,0,0])