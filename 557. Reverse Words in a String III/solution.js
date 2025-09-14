/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
  let words = s.split(" ");

  let reversedWords = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
}

s = "Let's take LeetCode contest";
console.log(reverseWords(s)); // "s'teL ekat edoCteeL tsetnoc"

// Step 1: Split the string into an array of words

// Step 2: For each word:
//   a) Split the word into an array of letters
//   b) Reverse the letters
//   c) Join the letters back into a string

// Step 3: Join the reversed words back into a single string with spaces
