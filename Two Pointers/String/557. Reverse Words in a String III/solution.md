```js
function reverseWords(s) {
  // split the string into an array of words
  let words = s.split(" ");

  // split the word into an array of letters: word.split("")
  // reverse the letters: .reverse()
  // join the letters back into a string: .join()
  let reversedWords = words.map((word) => word.split("").reverse().join(""));

  // join reversed words back into a single string with spaces
  return reversedWords.join(" ");
}
```

// Step 1: Split the string into an array of words

// Step 2: For each word:
// a) Split the word into an array of letters
// b) Reverse the letters
// c) Join the letters back into a string

// Step 3: Join the reversed words back into a single string with spaces
