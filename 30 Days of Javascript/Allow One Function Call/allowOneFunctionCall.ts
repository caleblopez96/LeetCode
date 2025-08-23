/*
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

//@ts-ignore: duplicate type name
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

//@ts-ignore: duplicate function name
function once(fn: Function): OnceFn {
  let hasBeenCalled: boolean = false;
  let result;
  return function (...args) {
    if (hasBeenCalled) {
      return;
    }
    result = fn(...args);
    hasBeenCalled = true;
    return result;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Step by step:

// 1. Create a boolean flag in the closure to track if fn has been called:
//    let hasBeenCalled = false;

// 2. Create a variable in the closure to store the result of fn:
//    let result;

// 3. Return a new function that can take any number of arguments (...args).

// 4. Inside the returned function, check the flag:
//    - If hasBeenCalled is true, return undefined.

// 5. If fn has not been called yet:
//    - Call fn with the passed arguments: result = fn(...args)
//    - Set hasBeenCalled = true to mark that fn has run

// 6. Return the result
