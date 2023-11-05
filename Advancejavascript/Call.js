function setuser(username){
    this.username = username;
    //console.log("called");
}

function createuser(username,login,address){

    setuser.call(this, username)
    this.login = login;
    this.address = address;
}

const user = new createuser("Sudhakar",25,"adcd");
console.log(user);
//In the call this we can call the other function using the call this  but  this should be used in the bracket and we have to create new object by using new keyword to create the Object the refernec which is given or which we are calling the function