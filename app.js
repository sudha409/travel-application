
const readline = require("readline-sync");

//Values, Data Types
let destination;    // string
let days;       // number
let budget;   // number
let dailyCost;

//take user input for destination,days & budget
destination = readline.question("Enter a destination: ");

//Validate destination data
 while (!destination || destination.trim() === "") {
    console.log("Please enter a valid destination name.");
    destination = readline.question("Please enter a valid destination name: ");
  }

//take user input & Validate days
days = readline.question("Enter number of days: ");
 while (!days || days < 1 ) {
    days = readline.question("Please enter a valid number of days: ");
  }

//take user input & Validate budget
budget = readline.question("Enter a budget: ");
 while (!budget || budget < 1 ) {
    budget = readline.question("Please enter a valid budget.: ");
  }



// Operation: calculate total trip cost
let totalCost = days * dailyCost;


// Stringing Characters Together
let tripMessage = "Your trip to " + destination + " will cost $" + totalCost;
console.log(tripMessage);


// Building Arrays
let activities = ["museum tour", "boat ride", "city walk", "local food tasting"];


// Using Arrays (accessing, updating, transforming)
let upperActivities = activities.map(a => a.toUpperCase());
console.log(upperActivities);


// Control Structures and Logic
if (totalCost <= budget) {
  console.log("You are within your budget!");
} else {
  console.log("You need to save more money.");
}


// Working With Loops
console.log("Planned Activities:");
for (let i = 0; i < activities.length; i++) {
  console.log("- " + activities[i]);
}