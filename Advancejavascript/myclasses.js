// class user{
//     constructor(username,login,password){
//         this.username = username;
//         this.login = login;
//         this.password = password;
//     }

//     encryptPassword(){
//       return `${this.password}abcd`
//     }

//     Changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("chai", 34,12345)
// console.log(chai.encryptPassword());//we can call other constructor by another constructor

// console.log(chai.Changeusername());


//behind the scene
// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptedPassword = function(){
//     return `${this.password}abcd`
// }

// User.prototype.Changeusername = function(){
//     return`${this.username.toUpperCase()}`
// }

// const tea = new User("tea", 34,12345)
// console.log(tea.encryptedPassword());
// console.log(tea.Changeusername());

//inheritance


// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123")
// chai.addCourse()

// chai.logMe()
// const masalachai = new User("maslaChai")
// console.log(masalachai);

// console.log(chai instanceof User);
// console.log(chai instanceof Teacher);

//Static prorperties

class User {
        constructor(username){
            this.username = username
        }
    
        logMe(){
            console.log(`USERNAME is ${this.username}`);
        }

        static createId(){
                return '123'
            //static keyword wont give us acess to any child classes or doesnot give allowns to createId as you took keep in mind
        }
    }

    const Sudhakar = new User("Sudhakar") 
    console.log(Sudhakar.createId());

    class Teacher extends USer{
        constructor(username,email){
            super(username)
            this.email = email
    }
    }

    const redmi = new Teacher("redmi", "redi@google.com")
    console.log(redmi.createId());