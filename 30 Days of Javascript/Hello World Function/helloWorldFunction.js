/**
 * @return {Function}
 */

function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Step by step:

// Step 1: Create a function that returns another function:
//    function createHelloWorld(){}

// Step 2: Return a function that accepts any number of arguments (...args)
//    but always returns the string "Hello World":
//    return function(...args) { return "Hello World" }

// Step 3: Call createHelloWorld() to get the inner function, then invoke it:
//    f(); // returns "Hello World"
