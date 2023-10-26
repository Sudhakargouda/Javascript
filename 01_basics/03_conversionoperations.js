let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);

let playerJerseyNumber = 7

let numNumber = Number(playerJerseyNumber)
console.log(numNumber)
console.log(typeof numNumber)


let boo = ""
let booleanBoo = Boolean(boo)
console.log(booleanBoo)
console.log(typeof booleanBoo);


// ***********Operations **********

//simple
console.log(2 + 2)

console.log("1" + 2)
//In above code string number is given hence if you give first string number means the sum will not calculate

console.log(1 + 2 + "3");
// if you give at last means it will calculate 

//increment and decrement
let game = 500
--game;
console.log(game)


let x = 5
const y = x++
console.log(x,y);

let a = 10
const b = ++a
console.log(a, b);
