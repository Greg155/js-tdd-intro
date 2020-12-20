const assert = require("assert");

const capitalizeFirstLetters = (input) => {
  let output = "";
  if (input.length > 0) {
    let phrase = input.split(" ");
    for (let i = 0; i < phrase.length; i++) {
      phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1);
    }
    output = phrase.join(" ");
    return output;
  } else {
    return "";
  }
};

// TDD

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that it workd for 1 word
assert.strictEqual(capitalizeFirstLetters("mickey"), "Mickey");
// Check that it workd for 1 character string
assert.strictEqual(capitalizeFirstLetters("m"), "M");
// Check that capitalizeFirstLetters transform the 1st letter of several words to uppercase
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
