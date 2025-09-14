function lengthOfLastWord(s: string): number {
    let trimmedString: string = s.trim();
    let wordArray: string[] = trimmedString.split(" ");
    let lastWord = wordArray[wordArray.length - 1];
    return lastWord.length;
}

// trim the white space from front and back of the string
// get the last element of the sring
//      split the string into words
//      get the last word
// find and return length of last word
