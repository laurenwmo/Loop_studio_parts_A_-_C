//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];



//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (let i = 0; i < proteins.length; i++) {
   console.log(proteins[i], grains[i], vegetables[i], beverages[i], desserts[i]);
}


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

var readlineSync = require('readline-sync');
var mealNumber = readlineSync.question('How many meals to assemble? ');
if (mealNumber > 6) {
    console.log('Thats too many meals!')
  }  
if (mealNumber < 1) {
  console.log('Why did you even ask? Not possible.')
}

else if (mealNumber <= 6) {
  console.log('You have selected an appropriate number of meals.')
  
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”