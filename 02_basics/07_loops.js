const temperature = 40
if(temperature === 40){
    console.log("yes");
}
else{
    console.log("No");
}

//<, >, <=, >=, ==, !=, ===, !==

const scoree = 200

if(scoree > 100){
    let power = "vguard"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);
const balance = 1000
if(balance < 100 ){
    console.log("Yes it is 100");
}
else if(balance < 200 ){
    console.log("Yes it is 200");
}
else if(balance < 300 ){
    console.log("Yes it is 300");
}
else if(balance < 400 ){
    console.log("Yes it is 400");
}
else{
    console.log("It is greater than 10000");
}

//&& and ||

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 
//all condition should be true 
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
}
//any one condition is true it will be executed
if(loggedInFromGoogle || loggedInFromEmail){
   console.log("User logged In") 
}

//Switch

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("December");
        break;
}

//truthy or falsly
const userEmail = ""

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//Important 
//falsy values
// false, 0, -0, BigInt 0n, ", null, undefined, NaN"

//truthy values
//"0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalesing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

//ternary operator
const iceCreamPrice = 100

iceCreamPrice <= 90? console.log("You can Buy the ice cream"): console.log("You cannot buy the ice cream");