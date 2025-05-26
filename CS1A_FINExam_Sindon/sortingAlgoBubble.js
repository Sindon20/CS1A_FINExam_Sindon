// Create an empty array to hold the numbers
var numbers = [];

// Prompt user to enter numbers and push them into the array
for (var i = 0; i < 10; i++) {
  var num = prompt("Enter number " + (i + 1) + ":");
  numbers.push(parseInt(num.trim(), 10));
}

// Funtion to implement Bumble Sort
function bubbleSort(arr) {
  var n = arr.length;
  var swapped;

  // Outer loop for each pass
  for (var i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for comparing adjacent elements
    for (var j = 0; j < n - 1; j++) { 
      console.log("Comparing:", arr[j], "and", arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // Swap if the element found is greater
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        console.log("Swapped:", arr[j], "and", arr[j + 1]);
      }
    }

    // If no two elements were swapped, the array is sorted
    if (!swapped) {
      break;
    }
  }
}

// Call the bubble sort function
bubbleSort(numbers);

// Log the sorted array
console.log("Sorted array:", numbers);