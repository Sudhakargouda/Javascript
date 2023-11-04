//FOur concept learnt 
//1) is about function can be acces by object
//2)about new key word which will acess the object
//3)about the specfic reference or power to only the object or array or we can say string
//4)about inheritance __proto__ and this


function multiple5(num){
    return num * 6
}

multiple5.power = 3

// console.log(multiple5(6));
// console.log(multiple5.power);
// console.log(multiple5.prototype);
//In the above we can acess the function as Object also and function is also called as object and function

//here remeber the concept of the new keyword which creates the Object


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai", 25);
const tea = createUser("tea", 250);

chai.printMe()

//In this above keyword the main concept is about the new keyword and we create own methods see the syntax for that above




let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spider: "sling",

    getSpider: function(){
        console.log(`this.{spiderman}`);
    }
}

Object.prototype.sudhakar = function () {
    console.log(`Sudhakr is present in all Objects`);
}

Array.prototype.heysudhakar = function () {
    console.log(`Sudhakar says Hello`);
}

heroPower.sudhakar()//power to object reference

myHeros.sudhakar()//power to array reference

//heroPower.heysudhakar()//here you can see that we have given reference or power to array only but we are acess the object hence it will show an erroe so when you give ascces to the the array only the object will not acess

myHeros.heysudhakar();


const User = {
    name: "Chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isavailable: false
}

const TASupport = {
    makeAssignment: 'JS assignement',
    fullTIme:true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//morden syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername = "Coding    "

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherusername.truelength()
"Sudhakar".truelength()
"iceTea".truelength()//here you can learn or see about the this keykeyword playing role this is nothing but an context of this....