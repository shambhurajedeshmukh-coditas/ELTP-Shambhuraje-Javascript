const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e); //2.72

// Destructure and assign the elements of countries array
const [fin, est, sw, den, nor] = countries;
console.log(fin); //Finland

// Destructure the rectangle object
const { width, height, area, perimeter } = rectangle;
console.log(perimeter); //60

//terate through the users array and get all the keys of the object using destructuring
users.forEach(({ name, scores, skills, age }) => {
  console.log(`Name-${name},Scores-${scores},Skills-${skills},Age-${age}`);
});

//// Find the persons who have less than two skills
users.forEach(({ skills, name }) => {
  if (skills.length < 2) {
    console.log(`${name} have less than 2 skills`);
  }
});

//Destructure the countries array print name, capital, population and languages of all countries

//7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//8. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTML", "CSS", "JS", "Node"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "Node"], [85, 80, 85, 80]],
];

function convertArrayToObject(students) {
  const convertedObject = [];
  for (let counter = 0; counter < students.length; counter++) {
    const [name, skills, scores] = students[counter];
    convertedObject.push({ name, skills, scores });
  }
  console.log(convertedObject);
}
console.log(convertArrayToObject(students));

// 9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const Student = {
  Name: "David",
  age: 25,
  Skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const { Name, age, Skills } = Student;

const { frontEnd, backEnd, dataBase, dataScience } = Skills;

const newSkills = {
  frontEnd: [{ skill: "Bootstrap", level: 8 }, ...frontEnd],
  backEnd: [{ skill: "Express", level: 9 }, ...backEnd],
  dataBase: [{ skill: "SQL", level: 8 }, ...dataBase],
  dataScience: ["SQL", ...dataScience],
};

const newStudents = {
  Name,
  age,
  Skills: newSkills,
};
console.log(newStudents);
