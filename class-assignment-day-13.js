//Create an empty object called cow
const cow = {};

//Print the the cow object on the console
console.log(cow);

//Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name = "Rani";
cow.legs = "4";
cow.color = "Black";
cow.sound = function () {
  return "maaah maaah";
};

//Get name, legs, color, age and sound value from the cow object
const { name, legs, color, sound } = cow;
console.log(name);
console.log(legs);
console.log(color);

//Set new properties the cow object: breed, getCowInfo()
cow.breed = "Deshi";
cow.getCowInfo = function () {};

//Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkillCount = 0;
let skilledPerson = [];
for (const person in users) {
  const skillCount = users[person].skills.length;
  if (skillCount > maxSkillCount) {
    maxSkillCount = skillCount;
    skilledPerson = [person];
  } else if (skillCount === maxSkillCount) {
    skilledPerson.push(person);
  }
}
console.log(skilledPerson);

//Count logged in users, count users having greater than equal to 30 points from the following object.
let loggedUserCount = 0;
let userPointCount = 0;
for (const person in users) {
  if (users[person].isLoggedIn === true) {
    loggedUserCount += 1;
  }
  if (users[person].points >= 30) {
    userPointCount += 1;
  }
}
console.log(loggedUserCount);
console.log(userPointCount);

//Find people who are MERN stack developer from the users object

//Set your name in the users object without modifying the original users object
const newUsers = JSON.parse(JSON.stringify(users));
newUsers.name = "shambhu";
console.log(users);
console.log(newUsers);

// Get all keys or properties of users object
// Get all the values of users object
console.log(Object.keys(users));
console.log(Object.values(users));

//Use the countries object to print a country name, capital, populations and languages.

const countries = {
  india: {
    capital: "New Delhi",
    population: 1380004385,
    languages: ["Hindi", "English"],
  },
  england: {
    capital: "London",
    population: 56075912,
    languages: ["English"],
  },
  nepal: {
    capital: "Kathmandu",
    population: 29609623,
    languages: ["Nepali"],
  },
  "sri lanka": {
    capital: "Colombo",
    population: 21413249,
    languages: ["Sinhala", "Tamil"],
  },
};

//Use the countries object to print a country name, capital, populations and languages.
const personAccount = {
  firstName: "Sam",
  lastName: "Deshmukh",
  incomes: [],
  expenses: [],
  tatalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income;
    }
    return total;
  },
  taotalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense;
    }
    return total;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return totalIncome() - this.taotalExpense();
  },
};

//  Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// Create a function called signIn which allows user to sign in to the application
function signUp(name, email, skills, age) {
  if (users.hasOwnProperty(name)) {
    console.log("You have account already");
  } else {
    users[name] = { email, skills, age, isLoggedIn: false, points: 0 };
  }
}

function signIn(name) {
  if (users.hasOwnProperty(name)) {
    users[name].isLoggedIn = true;
    console.log(`${name} you have signed In`);
  } else {
    console.log("You dont have account");
  }
}

// The products array has three elements and each of them has six properties.
// Create a function called rateProduct which rates the product
// Create a function called averageRating which calculate the average rating of a product

const indianCars = [
  {
    name: "Tata Tiago",
    price: 600000,
    ratings: [],
    brand: "Tata Motors",
    category: "Hatchback",
    description: "Compact hatchback car from Tata Motors.",
  },
  {
    name: "Maruti Suzuki Swift",
    price: 650000,
    ratings: [],
    brand: "Maruti Suzuki",
    category: "Hatchback",
    description: "Popular hatchback car from Maruti Suzuki.",
  },
  {
    name: "Hyundai i20",
    price: 700000,
    ratings: [],
    brand: "Hyundai",
    category: "Hatchback",
    description: "Stylish hatchback car from Hyundai Motors.",
  },
];

function rateProduct(productIndex, rating) {
  if (productIndex >= 0 && productIndex < products.length) {
    products[productIndex].ratings.push(rating);
    console.log(`You have successfully rated ${products[productIndex].name}.`);
  } else {
    console.log(`Product index ${productIndex} is out of range.`);
  }
}

function averageRating(productIndex) {
  if (productIndex >= 0 && productIndex < products.length) {
    const ratings = products[productIndex].ratings;
    if (ratings.length === 0) {
      return "No ratings yet.";
    } else {
      const sum = ratings.reduce((acc, curr) => acc + curr, 0);
      return sum / ratings.length;
    }
  } else {
    return "Product index is out of range.";
  }
}
