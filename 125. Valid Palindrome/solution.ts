// remove white space, and anything thats not an ascii character

function isPalindrome(s: string): boolean {
    let sLower = s.toLowerCase().split("");
    sLower = sLower.filter((el) => /[a-z0-9]/.test(el));
    let reversed = [...sLower].reverse().join("");
    let cleaned = sLower.join("");
    return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// lowercase s and turn into array
// remove all the spaces and other chars, make it alpha numeric
// reverse the string
// compare reverse string and original string
// return comparison output
