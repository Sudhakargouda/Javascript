const name = "Sudh"
const repoCount = "akar"
//console.log(name + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('The/man/of/god')//string Object

console.log(gameName[0]); //postion we can find
console.log(gameName.length); //length of the string we can find
console.log(gameName.toUpperCase()); // string uppercase
console.log(gameName.charAt(2)); //character postion
console.log(gameName.indexOf('o'));//character index

const newString = gameName.substring(0,4)
console.log(newString); // specfic words can be taken by this method

const sliceString = gameName.slice(8,11)//specfic words are taken and remaining words will be removed
const slString = gameName.slice(-8,11)
console.log(slString);

const whiteSpaceRemoval = "  Dhoni  "
console.log(whiteSpaceRemoval);
console.log(whiteSpaceRemoval.trim());// to remove white space

const url = "https://adajhbshf.com/dbduffb%33kasehfsau"
console.log(url.replace("%33",'--'));
console.log(url.includes('mundar'));// replace or true or false we can check

console.log(gameName.split('/')); // by split method we can make the array of given string 

