//  1. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A keyPairs of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

function letterCombinations(string) {
  let newArr = string.split("");
  let arrCopy = [];
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
  for (digits of newArr) {
    console.log(keyPairs[digits]);
  }
}
letterCombinations("23");

function letterCombinations(string) {
  // Essential these are the key pairs in the image/replicated as an object here
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
  // Total number of paid we'd get will be stored in this array below.
  let totalPairs;

  if (string.length) {
    totalPairs = [""];
    //If the input length is > 0 then code below runs.
    let stringArr = string.split("");
    // converting input string to an array (not always  neccessary)
    for (num of stringArr) {
      let words = keyPairs[num];
      let totalPairs2 = [];
      // console.log(words), just testing(irrelevant)
      for (word of words) {
        console.log(word);
        for (item of totalPairs) {
          console.log(item);
          totalPairs2.push(item + word);
          // console.log(totalPairs2);
        }
      }
      totalPairs = totalPairs2;
    }
    return totalPairs;
  }
  return (totalPairs = []);
}

letterCombinations("");
