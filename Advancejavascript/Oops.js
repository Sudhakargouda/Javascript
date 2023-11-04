//javascript and classes

//OOP

//Object
//Collection of properites and methods
//toLowerCase

//Why to use OOP
//Parts of  OOP
//Object literal

//Constructor
//Prototypes
//Classes
//Instances(new, this)

//4 pillars
//Abstraction
//Encapsulation
//Inheritance
//Polymorphism

// const user = {
//     username: "Sudhakar",
//     logincount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         console.log("Got user details from databases");
//         //console.log(`username: ${this.username}`);
//         console.log(this);//current context it will written
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

//Construction Function we call new instances
 function User(username,loginaccount,signedIn) {
    this.username = username;
    this.loginaccount = loginaccount;
    this.signedIn = signedIn;
    this.greeting =  function () {
    console.log(`Welcome ${this.username}`);
    //return this
}
 return this // we can use also or wecannot use this one but he constructor function will run and it is by default
}

const userOne = new User("Sudhakar",9,true);
console.log(userOne);
const userTwo = new User("Harish", 7, false)
console.log(userOne);
console.log(userTwo);

// When you run the above userOne and USerTwo without using new keyword the first userone will print but after execting both userone and userTwo it will jump to the userTwo because we have not used the new keywords which say to refer new objects or reference or variable 


//see instanceof method mdn