(function() { 
  // Prpmpt user for numbers array input
  const numberInput = prompt("Enter numbers separated by commas (e.g. 24, 65, 21, 5, 9, 32, 42, 80, 57):");
  // Parse numbers array from input string
  let numbers = numbersInput.split(',').map(num => parseInt(num.trim(), 10));

  // Prompt user for names array input
  const namesInput = prompt("Enter names separated by commas (e.g. Zenvo, Erica, Jordie, Alicia, Redon):");
  // Parse names array from input string
  let names = namesInput.split(',').map(name => name.trim());

  // Merge both arrays into a single array
  const mergedArray = numbers.concat(names);
  console.log("Merged Array:", mergedArray);

  // Sort numbers descending numerically and log
  const sortedNumbersDesc = numbers.slice().sort((a,b) => b - a);
  console.log("Numbers sorted descending:", sortedNumbersDesc);

  // Sort names alphabetically and log
  const sortedNames = names.slice().sort();
  console.log("Names sorted alphabetically:", sortedNames);
})(); 