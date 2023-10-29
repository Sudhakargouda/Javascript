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

const myObject = {
    js: 'Javascript',
    Rb: 'Ruby',
    Sw: 'Swift',
    Cpp: 'C++',
}

