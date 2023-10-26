//StacK(Primitive) -> here the copy of value will be executed
//heap(Non primitive) -> copy of the reference value is taken

//stack
let you = "choudhary"

let anotheryou = you
anotheryou = "chai"

console.log(you);
console.log(anotheryou);

//Heap
let userOne = {
    email : "abcd@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "bcdef@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);