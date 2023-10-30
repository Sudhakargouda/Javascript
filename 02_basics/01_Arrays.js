/*
const myArr = [0,1,2,3,4,5]
//Array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()

console.log(myArr);
console.log(myArr.includes(5));
console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

//slice,splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
// in slice the original values will remain same and (1,3) it won't include the 3rd number
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);
//in splice the original values is changed and (1,3) and includes the number

*/

const marvel_heroes = ["afsfsf","aferere","adsere","btrgbrt"]

const dc_heroes = ["sdfssds","sfsvsfs","sfvsfff","fvdfefef"]
/*

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

//spread method will merge the array in single one array
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6,],7,[5,6,8,9,8,6,5]]
//array inside array will be printed as an whole an array format
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
*/

console.log(Array.isArray("Sudhakar"));//checks boolean
console.log(Array.from("Sudhakar"));//the string value will be converted to array
console.log(Array.from({name: "Sudhakar"}))// this is an object


let s1 = 500
let s2 = 1000
let s3 = 10000

console.log(Array.of(s1,s2,s3));
//of method will convert to array


