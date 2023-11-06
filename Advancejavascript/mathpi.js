const chai = {
    name: "Sudhakar",
    price: 245,
    Id:  23333,

    Orderchai: function(){
        console.log("chai nho bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
//In this mathpi will be const and and it cannot created other type and we can create our own properties and make changes wru=iteable,enumerable rune the code ypu will understand