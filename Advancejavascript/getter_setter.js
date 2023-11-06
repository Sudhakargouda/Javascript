class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Sudhakar`
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("Sudhakar@gmail.com", "abc");
console.log(chai.password);
console.log(chai.email);

//getter and setter in objects

const Userr = {
    _email: 'H@sfsef.com',
    _password: "abc",

    get email(){
        return this.email.toUpperCase()
    },

    set email(value){
        return _email = value
    }
}

const tea = Object.create(Userr)
console.log(tea._email);