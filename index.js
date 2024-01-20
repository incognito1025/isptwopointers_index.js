//index.js
//Develop working JavaScript code for your algorithm(s). When the file is run, an example should be included to show that the function(s) work as intended.
//Your code should be heavily commented with explanatory text, describing what is happening and why.


/* 
leetcode.com\'''




\\




26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k,
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain
the unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.

Return k.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    let left = 0; // left pointer
    let right = 1; // right pointer

    while (right < nums.length) {
        // Check if the elements at the left and right pointers are the same
        if (nums[left] === nums[right]) {
            // Continue moving the right pointer until a different element is found
            while (nums[left] === nums[right]) {
                nums.splice(right, 1)
            }
        }

        // Move both pointers to the next position
        left++;
        right++;
    }

    return nums.length;
};
