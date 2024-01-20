# Two Pointers Algorithm 

## Introduction
The Two Pointers Algorithm is a technique used to efficiently solve problems with a linear data structure, such as arrays or linked lists. It involves iterating through the data structure with two pointers (indexes) that move towards each other or in some specific manner, allowing for an optimized solution to certain types of problems.

## Algorithm Description
The algorithm typically involves initializing two pointers, often named "left" and "right," and moving them based on certain conditions until they meet or fulfill a specific criterion. This approach helps in solving problems that require examining pairs of elements or subarrays efficiently.

### Example 
(https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Remove Duplicates from Sorted Array

let removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;

    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            nums.splice(right, 1);
        } else {
            left++;
            right++;
        }
    }

    return nums.length;
};

*/

Explanation of problem:

let removeDuplicates = function(nums) {
    let left = 0; // Initialization of Pointers: left pointer initialized to the first element of array, index 0

    let right = 1; // right pointer initialized to the second element of array, index 1

    while (right < nums.length) { // Iterative Process: algorithm uses a while loop that continues until the right pointer reaches the end of the array;

        if (nums[left] === nums[right]) { // Comparison of Elements: The algorithm compares the elements at the positions pointed to by left and right.

            nums.splice(right, 1); //Removing Duplicates: If the elements at left and right are equal (indicating a duplicate), the algorithm removes the duplicate element using nums.splice(right, 1).

        } else {  // Advancing Pointers: If no duplicate is found, the left and right pointers are both incremented by 1. This step ensures that the pointers move forward, examining the next pair of elements.

            left++;  
            right++; // The process continues until the right pointer reaches the end of the array.
        }
    }
    return nums.length; // Returning Length: Finally, the function returns the length of the modified array, which now contains unique elements without duplicates.
};



![](nikik.@Nikis-MacBook-Air isptwopointers % /Users/nikik./documents/git-test/isptwopointers/image.png

![Two Pointers](https://beginnersbug.com/two-pointer-algorithm/)

![nikik.@Nikis-MacBook-Air isptwopointers % /Users/nikik./documents/git-test/isptwopointers/image.png](image.png)

####Big O Evaluation:
The Two Pointers Algorithm is often associated with a linear time complexity, expressed as O(n), where "n" signifies the size of the input data structure. This efficiency results from the algorithm's ability to traverse the entire data structure once.

The Two Linear Time Complexity (O(n)):**

   - "Time complexity" refers to how the time taken by an algorithm scales with the size of the input.  
   
   - In our context, "n" represents the size of the input data structure. It could be the number of elements in an array, the length of a list, or something similar.

   - For example, if you have an array with 5 elements, "n" would be 5.
   

   - Linear time complexity, expressed as O(n), means that as you increase the size of the input data structure (often denoted by "n"), the time taken by the algorithm grows proportionally.

   - In simpler terms, if you double the size of the input, the algorithm takes roughly twice as much time.
   
   - In essence, Big O Evaluation helps us understand how fast an algorithm is, and the Two Pointers Algorithm's linear time complexity (O(n)) means it efficiently handles lists, especially when they're quite large.


#####Use Cases:
The Two Pointers Algorithm is handy when dealing with problems that require a streamlined examination of pairs of elements or subarrays. It is particularly useful in scenarios where a straightforward approach might lack efficiency.


######Edge Cases and Concerns:
Ensure that the input data structure is mutable if intending to make in-place modifications.
Exercise caution in situations where the two pointers need to follow specific movement patterns or meet particular conditions.

########Citations:



Your readme.md file should include an introduction to your algorithm(s), summarizing the purpose of the algorithm and an overview of how it works.
Your readme.md file should also include an "Algorithm description" section that details, step-by-step, how the algorithm works. You may wish to use images or code examples to get the point across.
Your readme.md file should also include a "Big O evaluation" section that examines the time complexity of the algorithm. It should state the correct complexity and describe why the algorithm has that complexity.
Your readme.md file should also include a "Use cases" section that describes when this algorithm may be used.
Your readme.md file should also include an "Edge cases and concerns" section that describes any constraints to using the algorithm or any situations where the algorithm will not yield the correct result.
Your readme.md file should also include a "Citations" section where you provide links to any websites, videos, or other resources you used to help generate your code or your explanation.
Any ChatGPT citations should include a link to the conversation or conversations you had with chatGPT
Your readme.md file should be free from spelling errors and mistakes. Try to download the vscode extension spell checker, and/or copy the text to a google doc and use Grammarly to help you with the grammar
Your readme.md file should be understandable and clear.