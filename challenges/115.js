// The fridge at Indeed is getting stinky with old leftovers. Write a function to check each item in the fridge. The items look like this:
//
// ```
// {
//   name: "Soy milk",
//   expiryDate: "2020-01-02"
// }
// ```
//
// Write a function `cleanOutFridge` that takes an **array** of fridge items. Print out the age of each item in the fridge relative to today's date.
//
// Example
//
// ```
// The 'Soy milk' is 19 days beyond its expiry date.
// ```
//
// In addition, from the function return an array containing the names of any items that are greater than 7 days past their expiry date and should be discarded.
//
// Example
//
// // ```
let items = [
  { name: 'Soy milk', expiryDate: '2021-01-01' },

  { name: 'Sirloin', expiryDate: '2021-01-05' },

  { name: 'Chewy lentils', expiryDate: '2021-02-28' }

];

// cleanOutFridge(items);
//
// // returns:
//
// // ['Soy milk', 'Sirloin']


function cleanOutFridge(array){
	//We will push expired foods into this empty array
	let toToss = [];
	//This variable will help us convert the date back into days
	let oneDay = 1000*60*60*24;//I don't fully understand the concept here
for (let foods in array){
	// Convert both dates to milliseconds
	let today = new Date();
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	let expDate = new Date(array[foods].expiryDate);
  // Calculate the difference in milliseconds
  let diffDate = today - expDate;
	//This variable will help us convert the date back into days
	let oneDay = 1000*60*60*24;//I don't fully understand the concept here
 // Convert back to days and return
  let diffDate1 = Math.round(diffDate/oneDay);
	//Print days past expiration date for each item
	if (diffDate1 <= 7){
	 console.log(`The ${array[foods].name} is not expired.`);
	} else {
  console.log(`The ${array[foods].name} is ${diffDate1} days beyond its expiration date.`);
	}
	//If the difference between today's date and the foods' expiration date is greater than 7, push food into toToss array 
  if( today - expDate >= 7){
		toToss.push(array[foods].name);
	}
 }
 return toToss;
}

console.log(cleanOutFridge(items));




module.exports = cleanOutFridge;
