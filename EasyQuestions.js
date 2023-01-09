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
