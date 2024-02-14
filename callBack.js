// const add=(number1,number2)=> number1+number2;
// const displaySum=(add)=>add(5,6);
// console.log(displaySum(add));
// const evenNumber=(number)=>{
//     let modifyedArray=[];
//     for(let counter=0;counter<number.length;counter++){
//         if(number[counter]%2===0){
//             modifyedArray.push(number[counter]);
//         }
//     }
//     return modifyedArray;
// }
// const filterFunction=(evenNumber
//     )=> evenNumber([1,2,3,4,5,6])
// console.log(filterFunction(evenNumber))

//filter callback function
const evenNumber = (number) => {
  return !(number % 2);
};

const filterFunction = (array, evenNumber) => {
  const modifyArray = [];
  for (const index of array) {
    if (evenNumber(index)) {
      modifyArray.push(index);
    }
  }
  return modifyArray;
};
console.log(filterFunction([1, 2, 3, 4, 5, 6], evenNumber));

//reduce callback function

const modifyedReduce = (arrayStored, sum, accumulateFunction) => {
  for (const number of arrayStored) {
    sum = accumulateFunction(sum, number);
  }
  return sum;
};
const customReduce = modifyedReduce(
  array,
  0,
  (accumulator, currValue) => (accumulator += currValue)
);
console.log(customReduce);
