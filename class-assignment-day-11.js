//Declare an empty array;
const myArray = [];
//Declare an array with more than 5 number of elements
const studentMarks = [89, 65, 67, 34, 99, 23];
//Find the length of your array
console.log(studentMarks.length); //6
//Get the first item, the middle item and the last item of the array
console.log(studentMarks[0]);
console.log(studentMarks[studentMarks.length - 1]);
console.log(studentMarks[Math.floor(studentMarks.length / 2)]);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [89, "Sam", 5.3, true, [4, 5, 7]];
//Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Coditas",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
//Print out each company
for (let counter = 0; counter < itCompanies.length; counter++) {
  console.log(itCompanies[counter]);
}
//Change each company name to uppercase one by one and print them out
for (let counter = 0; counter < itCompanies.length; counter++) {
  itCompanies[counter] = itCompanies[counter].toUpperCase();
}
console.log(itCompanies);
//Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyName = "Apple";
if (itCompanies.includes(companyName.toUpperCase())) {
  console.log(`${companyName} is found`);
} else {
  console.log("Company Not found");
}
//Filter out companies which have more than one 'o' without the filter method
for (
  let itCompaniesCounter = 0;
  itCompaniesCounter < itCompanies.length;
  itCompaniesCounter++
) {
  const matches = itCompanies[itCompaniesCounter].toLowerCase().match(/o/g);
  if (matches && matches.length >= 2) {
    console.log(itCompanies[itCompaniesCounter]);
  }
}
//Sort the array using sort() method
console.log(itCompanies.sort());

//Sort the array by country name length without sort;
let tempVariable;
for (
  let itCompaniesIterator = 0;
  itCompaniesIterator < itCompanies.length;
  itCompaniesIterator++
) {
  for (
    let itCompaniesItem = 0;
    itCompaniesItem < itCompanies.length - itCompaniesIterator - 1;
    itCompaniesItem++
  ) {
    if (
      itCompanies[itCompaniesItem].length >
      itCompanies[itCompaniesItem + 1].length
    ) {
      temp = itCompanies[itCompaniesItem];
      itCompanies[itCompaniesItem] = itCompanies[itCompaniesItem + 1];
      itCompanies[itCompaniesItem + 1] = temp;
    }
  }
}
console.log(itCompanies);
//Reverse the array using reverse() method
console.log(itCompanies.reverse());
//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
//Slice out the middle IT company or companies from the array
console.log(itCompanies[Math.floor(itCompanies.length) / 2]);

//Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);
//Remove the middle IT company or companies from the array
const middleItCompany = itCompanies.slice(
  Math.floor(itCompanies.length / 2) + 1,
  1
);
console.log(`${middleItCompany}`);
//Remove the last IT company from the array
console.log(itCompanies.pop());
//Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));

//24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango";
console.log(text.split(" ").length);

//25. In the following shopping cart add, remove, edit items
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
// add Gulabjamun at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Rasmalai")) {
  shoppingCart.unshift("Rasmalai");
}

//add Gulabjamun at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes(" Gulabjamun ")) {
  shoppingCart.push(" Gulabjamun ");
}
console.log(shoppingCart);

//remove 'Honey' if you are allergic to hone
const honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, 1);
console.log(shoppingCart);

//modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "India",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
if (countries.includes("India")) {
  console.log("INDIA");
} else {
  countries.push("India");
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}
console.log(webTechs);

//28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//29. The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
console.log(ages[0], ages[ages.length - 1]);

let itemSum = 0;
for (let counter = 0; counter < ages.length; counter++) {
  itemSum += ages[counter];
}
console.log(`Avg Age ${itemSum / 2}`);
const minElement = ages[0];
const maxElement = ages[ages.length - 1];
console.log(Math.abs(maxElement - itemSum / 2));
console.log(Math.abs(minElement - itemSum / 2));

//30. Find the middle countries in the countries array
let middleCountriesName;
const middle = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
  middleCountriesName = [countries[middle - 1], countries[middle]];
} else {
  middleCountriesName = [countries[middle]];
}
console.log(middleCountriesName);
//31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
let firstHalfArray;
let secondHalfArray;
if (!(countries.length % 2 === 0)) {
  firstHalfArray = countries.slice(0, middle);
  secondHalfArray = countries.slice(middle);
} else {
  firstHalfArray = countries.slice(0, middle + 1);
  secondHalfArray = countries.slice(middle + 1);
}
console.log(firstHalfArray);
console.log(secondHalfArray);
