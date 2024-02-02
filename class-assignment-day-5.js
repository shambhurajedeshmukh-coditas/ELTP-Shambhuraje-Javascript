//Declare a variable and assign a value 'Easy JavaScript Assignments'.

const myTopic='Easy JavaScript Assignments'

//Print the length of the string.
console.log(myTopic.length)//27

//Change all the string characters to capital letters using toUpperCase() method
console.log(myTopic.toUpperCase())//EASY JAVASCRIPT ASSIGNMENTS

//Change all the string characters to lowercase letters using toLowerCase() method

console.log(myTopic.toLowerCase())//easy javascript assignments

//Slice out the first word of the string using substr() and substring() method
console.log(myTopic.substr(0,4));//Easy
console.log(myTopic.substring(0,4));//Easy

//Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(myTopic.slice(5,27)); //JavaScript Assignments

//Check if the string contains a word Script using includes() method
console.log(myTopic.includes('Scrip'));//true

//Split the string into an array using split() method
console.log(myTopic.split());//[ 'Easy JavaScript Assignments' ]

//Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(myTopic.split(''));
// [
//     'E', 'a', 's', 'y', ' ', 'J',
//     'a', 'v', 'a', 'S', 'c', 'r',
//     'i', 'p', 't', ' ', 'A', 's',
//     's', 'i', 'g', 'n', 'm', 'e',
//     'n', 't', 's'
//   ]

//'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const myString='ELTP, BATCH, THREE';
console.log(myString.split(','))//[ 'ELTP', ' BATCH', ' THREE' ]

//Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(myTopic.replace('JavaScript','Python'));//Easy Python Assignments

//What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(myTopic.charAt(20));//g

//What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(myTopic.charCodeAt('J'));//69

//Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(myTopic.indexOf('a'));//1

//Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(myTopic.lastIndexOf('a'));//8

//Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
const javaScript='Easy JavaScript Assignments, Easy Easy';
console.log(javaScript.indexOf('Easy'));//0

//Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(javaScript.lastIndexOf('Easy'));//34

//Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
const easyQuote= 'Easy JavaScript Assignments, Easy Easy';
console.log(easyQuote.indexOf('Easy'));//0

//Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy   

const easyMessage= '       Easy JavaScript Assignments, Easy Easy             ';
console.log(easyMessage.trimStart());//Easy JavaScript Assignments, Easy Easy

//Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(myTopic.startsWith('Easy'));//true

//Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(myTopic.endsWith('Assignments'));//true

//Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(myTopic.match(/a/g).length);//3

//Use concat() and merge 'Easy' and 'JavaScript' to a single string
const newStr='Easy'.concat('JavaScript');
console.log(newStr);//EasyJavaScript

//Use repeat() method to print 'Easy JavaScript' 3 times.
console.log(myTopic.repeat(3));//Easy JavaScript AssignmentsEasy JavaScript AssignmentsEasy JavaScript 
//Assignments

//'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const countStr='Javascript is Easy, too Easy, too Easy, Easy to learn';
const charArray=countStr.split(' ');
let counter=0;
for(let i=0;i<charArray.length;i++){
   if(charArray[i]=='Easy' ||charArray[i]=='Easy,')
   {
       counter+=1;
       
   }
}
console.log(counter)
//4

//Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log(countStr.match(/Easy/g).length)//4

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
 

//28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const annualIncome='I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const cArr=annualIncome.split(' ');
let c=0;
for(let i=0;i<cArr.length;i++){
    if(parseInt(cArr[i])){
       c+=parseInt(cArr[i]);
}
}
console.log(c)//80000