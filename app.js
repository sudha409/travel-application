
const readline = require("readline-sync");

//Values, Data Types, and Operations
let destination;    // string
let days = 5;       // number
let budget = 800;   // number
let dailyCost = 100;

//take user input for destination,days & budget
destination = readline.question("Enter a destination: ");
days = readline.question("Enter number of days: ");
budget = readline.question("Enter a budget: ");

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