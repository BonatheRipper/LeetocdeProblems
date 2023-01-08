// Questions Source: https://leetcode/all/problems.html

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

        output.push(numbers[i], numbers[j]);
      }
    }
  }
  returnoutput;
}
TwoSums([2, 7, 11, 15], 9);
