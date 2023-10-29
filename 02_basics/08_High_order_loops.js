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

console.log(map);

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

const coding = ["js", "rb", "py", "java", "cpp"]

//By Function
// coding.forEach(function (val){
//     console.log(val);
// })

//By arrow Function
// coding.forEach((item) =>{
//     //console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "Rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})