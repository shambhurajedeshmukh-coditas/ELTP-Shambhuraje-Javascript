//1) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const strTen='10';
console.log((typeof strTen)==10);//return false because "10" is string and 10 is number
//use tofixed() to convert string to number
const numTen=Number(strTen).toFixed();
console.log(strTen==numTen);//it logs true now


//2) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')==10);//it returns false
//by using math.ceil() we can  make it 10 
console.log(Math.ceil('9.8')==10);//its true


//3)Generate a random number between 0 and 100 inclusively.
//random() function will generate the random values
function randomInteger(){
    console.log(Math.floor(Math.random()*101));
}
randomInteger();

//4) Generate a random number between 50 and 100 inclusively.
function getRandomInteger(){
    console.log(Math.floor(Math.random()*(51)+50));
}

getRandomInteger();

//5. Use console.log() and escape characters to print the following pattern.
const conut=5;
let i=1;
while(i<=5){
    console.log(i,i**0,i**1,i**2,i**3);
    i++;
}


//6)Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const baseTriangle=15;
const heightTriangle=20;
const areaFormula=0.5*baseTriangle*heightTriangle;
if(baseTriangle>0 && heightTriangle>0){
    console.log(`Area of triengle is ${areaFormula}`);
}else{
    return 0;
}