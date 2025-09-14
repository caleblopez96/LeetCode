function isAnagram(s: string, t: string): boolean {
    // convert to arrays
    const sToArray = s.split("");
    const tToArray = t.split("");
    // sort the arrays and turn back into strings
    const sSorted = sToArray.sort().toString();
    const tSorted = tToArray.sort().toString();
    // compare strings
    return sSorted === tSorted;
}

// Intuition: if a word is an anagram of antother word, then both words will contain the same exact letters.

// Step by step:

// turn strings to array so they can be sorted

// sort the array and convert them back to strings
//    you cant compare arrays since theyre reference types.
//    turn them back into strings so they can be compared

// return comparison
