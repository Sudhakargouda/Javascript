//Immediately Invoked Function Expression(IIFE)


(function chai (){
    console.log(`DB CONNECTED`);
})();//semicolon is important to execute the next Function


( (name) =>{
    console.log(`DB CONNECTED ${name}`);
})("Sudhakar")
