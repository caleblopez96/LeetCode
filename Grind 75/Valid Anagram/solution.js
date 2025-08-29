// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s, t) {
    let sToArray = s.split("");
    let tToArray = t.split("");

    const sSorted = sToArray.sort().toString();
    const tSorted = tToArray.sort().toString();

    return sSorted == tSorted;
}

// steps:
// turn strings to array so they can be sorted

// sort the array and convert them back to strings
//    you cant compare arrays since theyre reference types.
//    turn them back into strings so they can be compared

// return comparison
