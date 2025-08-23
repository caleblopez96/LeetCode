/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect2(val: any): ToBeOrNotToBe {
  return {
    toBe: function (otherVal: any) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (otherVal: any) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect2(5).toBe(5); // true
 * expect2(5).notToBe(5); // throws "Equal"
 */

// Step by step:

// Step 1: Create a function expect that accepts a value (val)
//    - This value will be compared against other values in the returned methods

// Step 2: Return an object with two methods: toBe and notToBe
//    - Both methods have access to val through closure

// Step 3: toBe(otherVal)
//    - Compares val and otherVal using strict equality (===)
//    - If equal, return true
//    - If not equal, throw an Error("Not Equal")

// Step 4: notToBe(otherVal)
//    - Compares val and otherVal using strict inequality (!==)
//    - If not equal, return true
//    - If equal, throw an Error("Equal")
