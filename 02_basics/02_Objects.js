//singleton objects
///objects literals

const mySym = Symbol("Key1")
//Symbol object will be decalared in [] in brackets
 const JsUser = {
     name: "Sudhakar",
     age: 18,
     [mySym]: "MyKey1",
     location: "gurgram",
     email: "sudhakar@google.com",
}

//objects can be decalared two types
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
//console.log(JsUser.mySym);

JsUser.email = "Sudhakar@chatgpt.com"
Object.freeze(JsUser)
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User ${this.name}`);
}
//console.log(JsUser.greeting());

//singleton object
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "Sudhkar@google.com",
    fullname: {
        userfullname: {
            firstname: "Sudhakar",
                lastname: "Patil"       
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)//here remeber target and source
// console.log(obj3);
// the two objects will be combined and given in one object array type
const obj3 = {...obj1, ...obj2}//spread type
//console.log(obj3);

const users = [
    {
        id: 12345,
        email: "Sudhakae@JsUser.com"
    },   
    {
        id: 12345,
        email: "Sudhakae@JsUser.com"
    },
    {
        id: 12345,
        email: "Sudhakae@JsUser.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    cousename: "Rahul",
    price: "999",
    courseInstructor: "Jeeva"
}

//console.log(course.courseInstructor);
//De-structured instructor in react we use more
const {courseInstructor: instructor} = course

console.log(instructor.price);

//react code the curly bracket is the one where we implement the De-structured instructor
const navbar = ({company}) =>{

}

//Api are written in JSON format
//example and many website are there to read the api

// {
//     "name": "Sudhakar"
//     "cousename": "xyz"
//     "price": "free"
// }



