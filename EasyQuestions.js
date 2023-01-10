// Questions Source: https://leetcode/all/problems.html
//Online Editor/CodeShare: https://www.jdoodle.com/execute-nodejs-online/
//Start from Nairaland: https://www.nairaland.com/7491817/algorithm-data-structure-study-section/3#119851677

// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function TwoSums(numbers, target) {
  let checkingVal;
  let output = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && checkingVal !== target) {
        checkingVal = target;

        output.push(i, j);
      }
    }
  }
  return output;
}
console.log(TwoSums([2, 7, 11, 15], 9));

// Two sums Ends

// 2. Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

function isPalindrome(input) {
  var str = "";
  var inputCopy = input + "";
  for (var i = 0; i < inputCopy.length; i++) {
    str = inputCopy.charAt(i) + str;
  }
  if (Number(str) === Number(input)) {
    return true;
  }
  return false;
}
console.log(isPalindrome(-121));
// Palindrome Number ends

// 3. Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

function RemoveDuplicates(input) {
  var length = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
      // Since array is sorted, if the next item in the loop isnt === to previous
      // wee add one to length variable.
      length++;
    }
  }
  return length;
}
RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// 4. Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

function ValidParentheses() {}
