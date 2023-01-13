//  1. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A keyPairs of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

function letterComb(string) {
  let keyPairs = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let totalPairs;

  if (string.length) {
    totalPairs = [""];
    let stringArr = string.split("");
    for (num of stringArr) {
      let words = keyPairs[num];
      let totalPairsAdder = [];
      for (word of words) {
        // console.log(word);
        for (item of totalPairs) {
          // console.log(item);
          totalPairsAdder.push(item + word);
        }
      }
      totalPairs = totalPairsAdder;
    }
    return totalPairs;
  }
  return (totalPairs = []);
}

console.log(letterComb("23"));
// Letter Combinations  Ends

// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
// Difficulty:
// Medium
function addTwoNumbers() {
  let listA = [9, 9, 9, 9, 9, 9, 9];
  let listB = [9, 9, 9, 9];
  function loops(arr, arg) {
    for (item of arr) {
      if (typeof arg === "string") {
        arg = item + arg;
      } else {
        arg.push(Number(item));
      }
    }
    return arg;
  }
  let adderA = loops(listA, "");
  let adderB = loops(listB, "");
  let count = 0;

  let answer1 = Number(adderA) + Number(adderB) + "";
  let Output = loops(answer1.split(""), []);

  return Output.reverse();
}
console.log(addTwoNumbers());

// 3.Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
// Difficulty:

function LongestPalindromic(input) {
  let joiner = "";
  let joiner2 = "";
  let arr = input.split("");
  let x = 0;
  let y = 0;
  let z = 0;
  let longestPalindrom;

  function checkPalindrom(str, str2) {
    if (str === str2 && str.length && str2.length) {
      if (str.length > z) {
        z = str.length;
        longestPalindrom = str;
      }
    }
  }
  while (x < arr.length) {
    for (item of arr) {
      // console.log(y)
      y++;
      if (x < 1) {
        joiner = joiner + item;
        joiner2 = item + joiner2;
        checkPalindrom(joiner, joiner2);
      } else {
        joiner = joiner + item;
        joiner2 = item + joiner2;
        let word = joiner.substring(x, arr.length);
        let word2 = joiner2.substring(0, joiner2.length - x);
        checkPalindrom(word, word2);
      }
      if (y === arr.length) {
        joiner = "";
        joiner2 = "";
        y = 0;
      }
    }
    x++;
  }
  if (x === input.length) {
    return longestPalindrom;
  }
  // console.log(x + "This is x", longestPalindrom, input.length);
  // return !longestPalindrom.length ? "" : longestPalindrom[longestPalindrom.length - 1];
}

console.log(LongestPalindromic("saippuakivikauppias"));
