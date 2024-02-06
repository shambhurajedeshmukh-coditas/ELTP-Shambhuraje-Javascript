//1.If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const userAge = 17;
if (userAge >= 18) {
  console.log("You are allowed to Marry");
} else {
  console.log("wait for", 18 - userAge, "year");
}
//2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
//. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.

const myAge = 21;
const yourAge = 3;
if (myAge === yourAge) {
  console.log("We both are same bro");
} else if (myAge > yourAge) {
  console.log("I am elder than you by", myAge - yourAge, "year");
} else {
  console.log("you are older than me by", yourAge - myAge, "year");
}

//Check, if a number is even or not.
const numberValue = 2;
numberValue % 2 == 0 ? console.log("Even") : console.log("Add");

//Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const studentScores = 50;
if (studentScores >= 80 && studentScores <= 100) {
  console.log("A Grade");
} else if (studentScores >= 70 && studentScores <= 89) {
  console.log("B Grade");
} else if (studentScores >= 60 && studentScores <= 69) {
  console.log("C Grade");
} else if (studentScores >= 50 && studentScores <= 59) {
  console.log("D Grade");
} else {
  console.log("F Grade");
}

//6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer
const selectedMonth = "March";
if (
  selectedMonth === "September" ||
  selectedMonth === "October" ||
  selectedMonth === "November"
) {
  console.log("Rainy Season");
} else if (
  selectedMonth === "December" ||
  selectedMonth === "January" ||
  selectedMonth === "February"
) {
  console.log("Winter Season");
} else if (
  selectedMonth === "April" ||
  selectedMonth === "May" ||
  selectedMonth === "June" ||
  selectedMonth === "July" ||
  selectedMonth === " August"
) {
  console.log("Summer Season");
} else {
  console.log("Spring Season");
}

//7. Check if a day is weekend day or a working day. Your script will take day as an input.
const dayInput = "saturday";
switch (dayInput) {
  case "monday":
    console.log("Working Day");
    break;
  case "tuesday":
    console.log("Working Day");
    break;
  case " wednesday":
    console.log("Working Day");
    break;
  case "thursday":
    console.log("Working Day");
    break;
  case "friday":
    console.log("Working Day");
    break;
  case "saturday":
    console.log("Holiday Day");
    break;
  case "sunday":
    console.log("Holiday Day");
    break;
  default:
    console.log("Enter Valid Input Day");
    break;
}

//8. Write a program which tells the number of days in a month.
const monthName = "february";
switch (monthName) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthName} have 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${monthName} have 30 days`);
    break;
  default:
    console.log(`The month is ${monthName} and it may have 28 or 29 days `);
    break;
}

//9. Write a program to check whether the year is leap year or not.

const inputYear = 2024;
inputYear % 400 === 0 || (inputYear % 100 !== 0 && inputYear % 4 === 0)
  ? console.log("Leep Year")
  : console.log("Not A leep Year");

//10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.

const voterAge = 19;
const voterInationslity = "India";
const voterCardStatus = true;
let voteCritiria =
  voterAge > 18
    ? voterInationslity === "India"
      ? "A"
      : "B"
    : voterCardStatus
    ? "C"
    : "D";
console.log(voteCritiria);

//11. What will be the result of the following nested ternary expression:
let result = true ? (false ? (true ? "A" : "B") : false ? "C" : "D") : "E";
console.log(result); //D
