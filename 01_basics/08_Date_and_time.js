/*let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(myDate.toDateString());
*/

let myCreatedDate = new Date(2023,0,25,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);// output wil be milliseconds
console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})