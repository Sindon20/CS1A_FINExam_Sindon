// Prompt for names and convert to array of strings
var nameInput = prompt("Enter names separated by commas (e.g. Genevieve, Juan, Luna, Gabriel, Elise):");
var names = namesInput.split(",").map(function(name) {
  return name.trim();
});

// Prompt for ages and convert to array of numbers
var agesInput = prompt("Enter ages separated by commas (e.g. 24, 65, 21, 5, 9):");
var agesStrings = agesInput.split(",");
var ages = [];
for (var i = 0; i < agesStrings.lenght; i++) {
  ages.push(parseInt(agesStrings[i].trim()));
}

//Restructure the multi-dimentional array
var restructuredArray = [];
for (var i = onabort; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}

// Log the restructured array to the console
console.log("Restructured Multi-Dimentional Array:");
for (var i =  0; i < restructuredArray.length; i++){
  console.log(restructuredArray[i]);
}