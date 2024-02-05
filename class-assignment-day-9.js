//Check if type of '70' is equal to 70
console.log(typeof('70')===70);//false

//Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8')===9);//false

//Boolean value is either true or false.
//Write five JavaScript statement which provide falsy value.
const myName='';
const myAge=null;
const myNumper=NaN;
const mySalary=false;
const myHobbies=[];
//Write five JavaScript statement which provide truthy  value.
const myAccount=true;
const firstName='Sam';
const myScore=[1,3,4,67];
const myBike=1;
const objName={k:1};

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4 =>true
// 4 >= 3=>true
// 4 < 3=>false
// 4 <= 3=>false
// 5 == 5=>true
// 9 === 9=>true
// 9 == '9'=>true
// 8 === '8'=>false
// 4 != 4=>false
// 4 !== 4=>false
// 4 != '4'=>false
// 4 != '4'=>false
// 4 !== '4'=>true
console.log(5>4);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(5==5);
console.log(9===9);
console.log(9=='9');
console.log(8=='8');
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4!=='4');
// true
// true
// false
// false
// true
// true
// true
// true
// false
// false
// false
// true
console.log("---------------------");
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length!=='jargon'.length)//true
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12=>true
// 4 > 3 && 10 > 12=>false
// 4 > 3 || 10 < 12=>true
// 4 > 3 || 10 > 12=>true
// !(4 > 3)=>false
// !(4 < 3)=>true
// !(false)=>true
// !(4 > 3 && 10 < 12)=>false
// !(4 > 3 && 10 > 12)=>true
// !(4 === '4')=>true
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
// true
// false
// true
// true
// false
// true
// true
// false
// true
// true

//There is no 'on' in both dragon and python
console.log('dragon'.includes('on')==='python'.includes('on'))//true
