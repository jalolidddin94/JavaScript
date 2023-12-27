// Decimal to binary
// let x = 50; // decimal
// let toBinary = x.toString(2); // binary

///////////////////////////////////////////////////////////

// Binary to decimal
// let x = 110010; // binary
// let toDecimal = parseInt(x, 2); // decimal

// console.log(toDecimal);

///////////////////////////////////////////////////////////////////////////////////
// eval() => string ichida arifmetik amal bajarish uchun ishlatiladi
// let a = 10;
// let b = 20;
// let result = 'a + b';
// let lastResult = eval(result);

// console.log(lastResult);

//////////////////////////////////////////////////////////////////////////////////////////
// JavaScript => multi paradigm programming language

// OOP => Object oriented  => tamoyillari => 1-Encapsulation, 2-Polymorphism, 3-Inheritance, 4-Abstraction
// FP => Functional programming

/////////////
// Class => reusable object yaratish uchun shablon(template) hisoblanadi.

// class car {
//     // parametr berish uchun constructor dan foydalanamiz
//     constructor(name, color, price) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
    
//     showInfo() {
//         console.log(`${this.color} ${this.name} ning narxi ${this.price}`);
//     }
    
//     showColor() {
//         console.log(`${this.color}`);
//     }
// }

// const car1 = new car('Jentra', "black", "15000$");
// const car2 = new car('Nexia', "white", "10000$");
// const car = new car('Damas', "red", "7000$");
// mashina3.showColor();

// console.log(typeof car);  // class ni uzi typeof function qaytaradi
// console.log(typeof car); // typeof object qaytaradi

//////////////////////////////////////////////////////////////////////////////////////

// Inheritance(meros olish) => in class

class User1 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    register() {
        console.log(`${this.username} xozir ruyxatdan o'tdi!`);
    }
}

class User2 extends User1 {
    constructor(username, email, password, membership) {
        super(username, email, password);
        this.membership = membership;
    }
    
    getPackage() {
        console.log(`${this.username} ${this.membership} paketga azo buldilar!`);
    }
}

class User3 extends User2 {
    constructor(username, email, password, membership, age) {
        super(username, email, password, membership);
        this.age = age;
    }
    
    getResult() {
        console.log(`${this.username} ${this.membership} ${this.age}`);
    }
}

let user = new User3("Jaloliddin", 'test@gmail.com', 1994, 'Oylik', 29);
user.getPackage();
user.register();
user.getResult();











