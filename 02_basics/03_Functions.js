 function xyz(){
    console.log("Sudhakar");
}
xyz()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

//addTwoNumbers(3,5)

const result = addTwoNumbers(3,5)

console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter your name");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

//we use rest operator to bundle the value passed in array 
function calaculateCartPrice(value1,value2,...num1){
    return num1
}

console.log(calaculateCartPrice(200,400,500,200000));

//We can pass the object by function and we can make separate and pass the object separately also
function handleInsideObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleInsideObject({
    username: "Sudhakar",
    price: 999
})

//we can also pass array functions also

const newArray = [200,300,400,500]
function arrayFunctionPassing(getTheArray){
    return getTheArray[3]
}

// console.log(arrayFunctionPassing(newArray));
console.log(arrayFunctionPassing([299,399,499,599]));