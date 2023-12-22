

// MODULE js
// Agar bitta faylda faqatgina bitta function yoki uzgaruvchi export qilmoqchi bulsak (export default nomi) qilib junatsak buladi, va import qilganda xoxlagan nom bilan tutib olamiz, gulli qavssiz
// Agar bitta faylda birdan oshiq function uzgaruvchilar bulsa, {nom1, nom2, nom3 ...} sifatida junatamiz, va import qilganda {} da bir xil nom bilan tutib olamiz.

/////////////////////////////////////////////////////////////////////////////////

// curry function

// non-curry version
// const add = (a, b, c) => {
//     return a + b + c
// }

// console.log(add(5, 5, 5));

///////////////////////////////////////////////////

// curry version

// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }

// console.log(add(5)(5)(5));

///////////////////////

// function sendRequest(greet){
//     return function (name) {
//         return function (message) {
//             return `${greet} ${name} ${message}`
//         }
//     }
// }

// console.log(sendRequest('Salom')('John')('Iltimos meni guruhga qushib quy!!!'));

///////////////////////////////////////////////////////////////

// Getter and Setter (get, set);

// const person = {
//     firstName : 'John',
//     lastName: 'Doe',
    
//     get fullName() {
//          return `${this.firstName} ${this.lastName}`
//     }
    
//     set fullName(value) {
//         this.firstName = value;
//     }
// }

// person.fullName = 'Obid Asomov';

// console.log(person.fullName);


// getter/setter => obj ichidagi metodni oddiy property sifatida chaqirish va tawqaridan turib usha function ni qiymatini uzgartirihs imkonini beradi(elatma!!! obj ichidagi function qiymati read only buladi, yani tawqaridan xech qanaqasiga qiymatni uzgartirib bulmaydi)
// getter => obj ichidagi functionni chaqirilganda oddiy property(key) sifatida chaqirishga imkon beradi
// setter => xar doim bitta parametr oladi, va uwa parametrda biz tawqarida berayotgan qiymat keladi va usha qiymatni function ga yangi qiymat sifatida set qilib

//////////////////////////////////////////////////////////////////////////////////////

// JSON => javascript object notation

// const companies = [
//     {
//         "name": "Wba",
//         "CEO": "Sardorbek Muhtorov"
//     },
    
//     {
//         "name": "Small Startup",
//         "CEO": null
//     }
// ]

// console.log(companies[1].name);

// let obj = { id: 1, name: 'Jaloliddin' };
// let toJson = JSON.stringify(obj); // to json
// let toObj = JSON.parse(toJson); // to object

// console.log(toObj);