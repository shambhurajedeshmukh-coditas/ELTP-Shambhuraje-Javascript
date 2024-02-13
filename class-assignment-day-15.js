// Iterate 0 to 10 using for loop, do the same using while and do while loop
//using for loop
for (let counter = 0; counter <= 10; counter++) {
  console.log(counter);
}

//while
let initialValue = 0;
while (initialValue <= 10) {
  console.log(initialValue);
  initialValue += 1;
}

//do while
do {
  console.log(initialValue);
  initialValue += 1;
} while (initialValue < 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop
for (let counter = 9; counter >= 0; counter--) {
  console.log(counter);
}
//while
let increamentedNumber = 10;
while (increamentedNumber >= 0) {
  console.log(increamentedNumber);
  increamentedNumber--;
}

//dowhile
increamentedNumber = 10;
do {
  console.log(increamentedNumber);
  increamentedNumber--;
} while (increamentedNumber >= 0);

// Iterate 0 to n using for loop
const interateNumber = (n) => {
  for (let counter = 0; counter < n; counter++) {
    console.log(counter);
  }
};

interateNumber(20);

//Write a loop that makes the following pattern using console.log():
for (let row = 0; row <= 5; row++) {
  for (let column = 0; column <= row; column++) {
    console.log("#".repeat(column));
  }
  console.log("\n");
}

//5. Using loop print the following pattern
console.log("i\t i^2 \t i^3");
for (let counter = 0; counter <= 10; counter++) {
  console.log(`${counter} \t ${counter * 2}\t ${counter * 3}`);
}

//5. Use for loop to iterate from 0 to 100 and print only even numbers
//6. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let counter = 0; counter <= 100; counter++) {
  if (!(counter % 2 === 0)) {
    console.log(`Odd Numbers ${counter}`);
  } else {
    console.log(`Even Number ${counter}`);
  }
}

//Use for loop to iterate from 0 to 100 and print only prime number

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let index = 5; index * index <= num; index += 6) {
    if (num % index === 0 || num % (index + 2) === 0) {
      return false;
    }
  }
  return true;
}
for (let counter = 0; counter <= 100; counter++) {
  if (isPrime(counter)) {
    console.log(counter);
  }
}

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
let sumOfEven = 0;
let sumOfOdd = 0;
for (let counter = 0; counter <= 100; counter++) {
  if (!(counter % 2 === 0)) {
    sumOfOdd += counter;
  } else {
    sumOfEven += counter;
  }
}
console.log(`Sum of all odd number are ${sumOfOdd}`);
console.log(`Sum of all even number are ${sumOfEven}`);

//11. Develop a small script which generate array of 5 random numbers
const studentMarks = [];
for (let counter = 0; counter < 5; counter++) {
  studentMarks.push(Math.floor(Math.random() * 100));
}
console.log(studentMarks);

//13. Develop a small script which generate a six characters random id: //iuyt56
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomID = "";
for (let counter = 0; counter < 6; counter++) {
  let index = Math.floor(Math.random() * characters.length);
  randomID += characters[index];
}
console.log(randomID);

//15. Write a script which generates a random hexadecimal number.
const hexadecimalSet = "123456789ABCDEF";
let hexadecimalSetNumber = "";
for (let counter = 0; counter < 6; counter++) {
  let index = Math.floor(Math.random() * hexadecimalSet.length);
  hexadecimalSetNumber += hexadecimalSet[index];
}
console.log(hexadecimalSetNumber);

//16. Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const newCounteries = countries.map((index) => {
  return index.toLocaleUpperCase();
});

console.log(newCounteries);

//17. Using the above countries array, create an array for countries length
const countriesLength = countries.map((index) => {
  return index.length;
});

console.log(countriesLength);

//18. Use the countries array to create the following array of arrays:
//   [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

const countriesArray = countries.map((country) => {
  const countriesSliceString = country.slice(0, 3).toUpperCase();
  return [country, countriesSliceString, country.length];
});

console.log(countriesArray);

//19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesWithLand = countries.filter((countries) => {
  if (countries.includes("land")) {
    return countries;
  }
});
if (countriesWithLand.length === 0) {
  console.log(countries);
} else {
  console.log(countriesWithLand);
}

//20. Using the above countries array, find the country containing the biggest number of characters.
const heighestLengthCountrie = countries.reduce((accumulator, currentValue) => {
  if (accumulator < currentValue.length) {
    accumulator = currentValue;
  }
  return accumulator;
}, countries[0].length);
console.log(heighestLengthCountrie);

//21. Using the above countries array, find the country containing only 5 characters.
const countryWithFiveChars = countries.filter((countries) => {
  if (countries.length === 5) {
    return countries;
  }
});
console.log(countryWithFiveChars);

//22. Find the longest word in the webTechs array.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const longestWord = webTechs.reduce((accumulator, currentValue) => {
  if (accumulator < currentValue.length) {
    accumulator = currentValue;
  }
  return accumulator;
}, countries[0].length);
console.log(longestWord);

//23. Use the webTechs array to create the following array of arrays:
const webTechsLengthArray = webTechs.map((webTechs) => {
  const upperCaseTech = webTechs.toUpperCase();
  return [upperCaseTech, webTechs.length];
});

console.log(webTechsLengthArray);

//24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
const mernAcronym = mernStack.map((webTechs) => {
  let Acronym = "";
  Acronym = Acronym + webTechs.slice(0, 1);
  return Acronym;
});
console.log(mernAcronym);

//25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const webTechStack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (const web of webTechStack) {
  console.log(web);
}

//26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ["banana", "orange", "mango", "lemon"];
const newFruitArray = [];
for (let counter = fruitArray.length - 1; counter >= 0; counter--) {
  newFruitArray.push(fruitArray[counter]);
}
console.log(newFruitArray);

//27. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let modifiedFullStack = [];
function modify(fullStack) {
  for (let counter = 0; counter < fullStack.length; counter++) {
    modifiedFullStack.push(fullStack[counter]);
  }
  return modifiedFullStack.join(" ");
}

console.log(modify(fullStack));
