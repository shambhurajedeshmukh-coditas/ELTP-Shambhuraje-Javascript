//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
const areaOfRectangle = (l, w) => {
  return l * w;
};
console.log(areaOfRectangle(5, 8));

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
const checkSeason = (month) => {
  const monthName = month.toLowerCase();
  switch (monthName) {
    case "january":
      return "Winter";
      break;
    case "february":
      return "Winter";
      break;
    case "march":
      return "Spring";
      break;
    case "april":
      return "Spring";
      break;
    case "may":
      return "Spring";
      break;
    case "june":
      return "Summer";
      break;
    case "july":
      return "Summer";
      break;
    case "august":
      return "Summer";
      break;
    case "september":
      return "Autumn";
      break;
    case "october":
      return "Autumn";
      break;
    case "november":
      return "Autumn";
      break;
    case "december":
      return "Winter";
      break;
    default:
      return 0;
      break;
  }
};
console.log(checkSeason("March"));

//Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    return 0;
  } else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  } else if (secondNumber > thirdNumber && secondNumber > firstNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
};
console.log(findMax(8, 67, 34));

//4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
  let temp = x;
  x = y;
  y = temp;
  console.log(x, y);
  return 0;
};
console.log(swapValues(10, 20));

//6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return "Item not found";
  } else {
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  let numbers = [];
  while (numbers.length < 7) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}
sevenRandomNumbers();
