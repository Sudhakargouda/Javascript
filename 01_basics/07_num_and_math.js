const score = 500
console.log(score);

const balance  = new Number(100)
console.log(balance);
console.log(balance.toString().length);//returns length value

console.log(balance.toFixed(2));//print the number after point

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//it gives the specfic value by rounding of the number

console.log(otherNumber);

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));//in indian rupes we can read by using this numbers

//++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//it will convert all negative value to positive
console.log(Math.round(4.6)); // it will round off the  value
console.log(Math.ceil(7.2));//Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(6.5));//Returns the greatest integer less than or equal to its numeric argument
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
//prints min and max values

//random numbers are generated between 0 to 1
console.log(Math.random());
//here numbers a
console.log(Math.random() * 10 + 1);//digit will be shifited and to avoid 0.03 or 0.00 we add +1

console.log(Math.floor(Math.random() * 10 + 1));

const min = 1
const max = 6
// formula to get the range of Numbers 
console.log(Math.floor(Math.random() * (max - min + 1))+ min);