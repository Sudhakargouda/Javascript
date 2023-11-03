const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('Asy task is completed and by this we can say that promise is created');
        resolve();
    },1000)
})
//the connection between promise create and consume is resolve() method and then keyword
promiseOne.then(function () {
    console.log("Promise consumed");
})

//In above method we have created the variable and did the promises but in below method we have not created the variable we just used hte promises and just hte syntsx are different

new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('Asy task 2');
        resolve();
    },1000)
}).then(function () {
    console.log("Async 2 resolved");
})

//In this we can see data can consumtion and the values and other things can be done
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({username: "Sudhakar",email: "chai@example.com"});
    },1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Sudhakar",password: "12345"});
        }else{
            reject('ERROR: Something went wrong')
        }        
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise either resolve or rejected"))
//In this above fourth promise we came to know that we can run multiple then and how error can occur and how to work with an error and how to pass the values and take particular objects like username


