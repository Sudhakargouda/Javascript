//for of loop

const arr = [1,2,3,4,5]

for (const items of arr) {
    console.log(items);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet);
}

//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United state America")
map.set('FR', "France")

//console.log(map);

for (const key of map) {
   // console.log(key);
}

//Another syntax to print iterate [key,values]

for (const [key,values] of map) {
    console.log(key, "=" ,values);
}

//We can not iterate object by for of loop but we can do with for in loop
const myObject = {
    js: 'Javascript',
    Rb: 'Ruby',
    Sw: 'Swift',
    Cpp: 'C++',
}

// for (const key of myObject) {
//     console.log(key);
// }

for (const key in myObject) {
    //console.log(myObject[key]);
    console.log(`${key} shortcut if for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    //console.log(programming[key]);
}

//for in loop will not be used in map

//for each loop

// const coding = ["js", "rb", "py", "java", "cpp"]

//By Function
// coding.forEach(function (val){
//     console.log(val);
// })

//By arrow Function
// coding.forEach((item) =>{
//     //console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "Ruby",
//         languageFileName: "Rb"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.languageName);
// })


const coding = ["js", "rb", "py", "java", "cpp"]


//In forEach loop we cannot return the specfic item which we want
const values = coding.forEach((item) => {
    //console.log(item)
    return item
})

//console.log(values);

//So to do that we use filter


//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//      return num > 4
// })

//console.log(newNums);

const books = [
   { title : 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
   { title : 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
   { title : 'Book Three', genre: 'History', publish: 1999, edition: 2007},
   { title : 'Book Four', genre: 'Science', publish: 1989, edition: 2009},
   { title : 'Book Five', genre: 'Fiction', Social: 1988, edition: 2088}
]

// let mybook = books.filter((boo) => boo.genre === 'History')

//  mybook = books.filter((boo) => {
//     return boo.publish >= 1975 && boo.genre === 'Histroy'
// })

// const mybook = books.filter((boo) => {
//     return boo.publish >= 1975 && boo.genre === 'History'
// })

// console.log(mybook);


//map function can also be used
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const Nums = myNumbers.map((num) => num + 10)

//console.log(Nums);


//we can do chanining where we can more methods or Functions
const Nums = myNumbers
.map((num) => num + 10)
.map((num) => num + 1)
.filter((num) =>num >= 15)

//console.log(Nums);

//very important most we use this  method

const myNums = [1,2,3]

//const myTotal = myyNums.reduce(function(accumalator, currentvalue) {
//     console.log(`acc: ${accumalator} and currval: ${currentvalue}`);
//     return accumalator + currentvalue
// }, 0)


//Reduce method will caluclate all the value  an givve us the total
const myTotal = myNums.reduce((acc,currval) =>acc + currval , 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "javascript",
        price: 999
    },
    {
        itemName: "ruby",
        price: 1111
    },
    {
        itemName: "swift",
        price: 8967
    },
    {
        itemName: "cpp",
        price: 12988
    },
    {
        itemName: "javascript",
        price: 8775638
    },
]

const shopping = shoppingCart.reduce((acc, item ) => acc + item.price, 0)

console.log(shopping);