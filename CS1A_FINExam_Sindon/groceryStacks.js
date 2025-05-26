//Create an empty array to hold grocery items
var groceryStacks = [];

// Function to check if the stack is empy and return the top item
function peek() {
  if (groceryStack.length === 0 ) {
    console.log("The stack is emty.");
    return null;
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

// Function to add an item to the stack
function push(item) {
  groceryStack.push(item);
  console.log("Added to stack:", item);
  console.log("Current stack:", groceryStack);
  console.log("Current top item:", peek());
}

// Function to remove the last added item from the stack
function pop() {
  if (groceryStack.lenght === 0) {
    console.log("The stack is empty.Cannot pop.");
  } else {
    var removedItem = groceryStacks.pop();
    console.log("Remove from stack:", removedItem);
    onsole.log ("Current stack:", groceryStack);
    console.log("Current top item:", peek());
  }
}

// Prom user for five grocery items
for (var i = 0; i < 5; i++) {
  var item = promt("Enter grocer item " + (i + 1) + ":");
  push(item);
}

// Example usage of pop function
pop(); // Remove the last added item pop();
pop(); // Remove another item pop();