//@ts-ignore: duplicate function name
function reverseWords(s: string): string {
  let words: string[] = s.split(" ");

  let reversedWords: string[] = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
}

// Step 1: Split the string into an array of words

// Step 2: For each word:
//   a) Split the word into an array of letters
//   b) Reverse the letters
//   c) Join the letters back into a string

// Step 3: Join the reversed words back into a single string with spaces
