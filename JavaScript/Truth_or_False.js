// Interesting discovery about creating truth or false values
// JavaScript already evaluates values as truthy or falsy, so you don’t need to check specific words.
// Truthy values: Non-empty strings, numbers (except 0), objects, arrays, true, etc.
// Falsy values: false, 0, "" (empty string), null, undefined, NaN.
// !!value: Converts a value into its boolean equivalent (true or false).


const truthyOrFalsy = (value) => {
  return !!value;  // Double negation converts any value to true or false
};

// Test cases:
console.log(truthyOrFalsy(true));    // Output: true
console.log(truthyOrFalsy(false));   // Output: false
console.log(truthyOrFalsy(0));       // Output: false
console.log(truthyOrFalsy(1));       // Output: true
console.log(truthyOrFalsy("hello")); // Output: true
console.log(truthyOrFalsy(""));      // Output: false
console.log(truthyOrFalsy(null));    // Output: false
console.log(truthyOrFalsy(undefined)); // Output: false
console.log(truthyOrFalsy(NaN));     // Output: false
