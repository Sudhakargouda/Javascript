//simple 
console.log(2 > 1);

console.log("2" <= 1);

console.log(null == 0);
console.log(null >= 0);
//here null is treated as 0 and we avoid these type of code

// === this comparision will happen based on datatype

console.log("2" == 2);//conversion happens
console.log("2" === 2);//strict datatype is checked

const bigInt = 5332363636363n;
console.log(bigInt)
console.log(typeof bigInt)

const id = Symbol('123456678890')
console.log(id);