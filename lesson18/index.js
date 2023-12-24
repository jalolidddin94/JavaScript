// JSON => javascript object notation

/////////////////////////////////////////////////////

// IIFE => immidiately invoked function expression => ikta js faylda bir xil nom bilan function yozilib qolsa, IIFE ga uraymiz va alohida scope xosil qilib beradi, va bir biriga tasir qilmaydi.

// (function () {
//     console.log('Hello!');
// })();

/////////////////////////////

// (function myIIFE() {
//     console.log("Hello!");
// })();

//////////////////////

// ((name) => {
//     console.log('Hello!', name);
// })("Test");

// ///////////////////////////////////////////////////////////////////////////

// pure vs impure function
// pure function xususiyatlari => Predictable, Readable, Reusable, Testable
// Predictable => the same input, the same output

// pure => tawqi tasir yuq
// function sayGreeting(name) {
//     return `Hello ${name}`
// }

// console.log(sayGreeting('Jaloliddin'));

///////////////////////////

// impure => tashqi tasir bor
// let greeting = 'Assalomu alaykum!';

// function sayGreeting(name) {
//     return `${greeting} ${name}`
// }

// console.log(sayGreeting('Jaloliddin'));

////////////////////////////////////////////////////////////////////////////////////

// Higher order function(map(), filter(),forEach()...) => biror bir function parametr sifatida boshqa bir functionni qabul qilishi

// const num = [1, 2, 3, 4, 5];
// [2, 3, 4, 5, 6]

// num.forEach((value) => console.log(value + 1));
// num.forEach(function (value) {
//     console.log(value + 1)
// });

//////////////////////////////////////

// Callback function => Higher ordered function da parametr sifatida keladigan function
// map(()=> {});
// map(function(){});

// /////////////////////////////////////////////////////////////////////

// prototype

// const user = {
//     name: 'Jaloliddin',
//     lastName: 'Karshiev',
    
//     greeting() {
//         console.log('Assalomu alaykum!');
//     }
// }

// Object.prototype.getStatus = function(){
//     console.log('I'm developer!');
// }

///////////////////////////////////////////////

// Array.prototype.getAge = function () {
//     console.log('Yoshim 29 da');
// }

// ///////////////////////////////////////////////////////////////////

// Number.prototype.getSum = function (a, b) {
//     return a + b
// }

// let num = 100;
// let num = new Number(100);
// console.log(num.getSum(10, 10));

// ////////////////////////////////////////////////////////////////////////////////

// String.prototype.getName = function () {
//     console.log('My name is Jaloliddin!');
// }

// let str = 'Webbrain';
// let str = new String('Webbrain!');
