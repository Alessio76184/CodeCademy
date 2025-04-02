// Define the input string to be translated into whale talk
const input = "Good morning";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];
let i = 0;

while (i < input.length) {
  // Convert to lowercase for case insensitivity
  if (vowels.includes(input[i].toLowerCase())) {
    resultArray.push(input[i]);
    // Handle double vowels
    switch (input[i].toLowerCase()) {
      case "e":
      case "u":
        resultArray.push(input[i]);
        break;
    }
  }
  // Move to the next character (this was inside the if statement before)
  i++;
}

// Convert to uppercase
console.log(resultArray.join("").toUpperCase());
