//Scopes are global and Inner and golbalscope are used in inner and inner scope are not used gobal
//and var variable is avoid using in scope

let a = 300
if(true){
    let a = 30
    const b = 40
    console.log("Inner: ", a);
}

console.log(a);

//scope inside scope

function one(){
    const username = "Sudhakar"
    function Two(){
        const website = "Youtube"
        console.log(username);
    }

    //console.log(website); it will not execute because it is not decalred in Two function

    //Two()//This will execute inside one Function
}
//one() this will not execute because it is outside the scope

if(true){
    const username = "Sudhakargouda"
    if(username === "Sudhakargouda"){
        const lastname = " Patil"
        console.log(username + lastname);
    }
    //console.log(lastname);
}
//console.log(username);

//++++++++ intersting ++++++++
//In this function declaration it will be executed 
addOne(2)
function addOne(num){
    return num + 1
}


//In this function declaration by assigning variable is not declared
addTwo(5)
const addTwo = function(num){
    return num + 2
}



