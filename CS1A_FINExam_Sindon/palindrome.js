(function() {
  // Prompt user for two strings 
  const str1 = prompt("Enter the first string (e.g. RACECAR):");
  const str2 = prompt("Enter the second string (e.g. RECORDER):");

  // Function to reserse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  // Reverse both strings
  const reversedStr1 = reverseString(str1);
  const reverseStr2 = reverseString(str2);

  // Log original and reversed strings
  console.log("Original string 1: ", str1);
  console.log("Reverse string 1: ", reversedStr1);
  console.log("Is string 1 a palindrome? ", str1 === reversedStr1);

  console.log("Original string 2: ", str2);
  console.log("Reversed string 2: ", reversedStr2);
  console.log("Reversed string 2: ", reversedStr2);
})();