//this keyword usage

const user = {
    name: "Sudhakar",
    price: 9999,

    welcomemessage: function (){
        console.log(`welcome to the cart ${this.name}`);
        //console.log(this);
    }
}

// user.welcomemessage()
// user.name = "Patil"
// user.welcomemessage()

console.log(this);// it will return the object means cruly bracket{}


 const chai = function (){
     let username = "Sudhakar"
     console.log(this.username);
 }

chai()

//arrow syntax 
const chaii = () => {
    let username = "Sudhakar"
    console.log(this.username);
}

chaii()

//Overall the this function is used in only in object inside function or when we use object with function

// it is undefined in the function and arrow

//Arrow Syntax
 // when we use the cruly bracket return keyword is used
const addTwo =(num1,num2) =>{
    return num1 + num2
}
//when we do not use cruly bracket the return is not used
const addTwoo = (num1,num2) =>(num1 + num2)

console.log(addTwoo(3,4));

const addTwooo = (num1,num2) =>({username: "Sudhakar"})

const Array = [2,4,6,8,]
Array.foreach((Array) => {})