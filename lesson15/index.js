// let num ={
//     name : "jaloliddin",
//     age : 29,
//     child :{
//         name : "Fozil",
//         age : 29,
//         child :{
//             name : "Oxunjon",
//             age : 27
//         }

//     }
// }

// sum = 0;

// const getage =(obj) =>{
//     sum = sum +obj.age;
//     if(obj.child){
//         getage(obj.child)
//     }
// }

// getage(num);
// console.log(sum);


// const plus =(n) =>{
//     let plus1 = 0;
//     for(let i = 0; i <= n; i ++ ){
//         plus1 += i
//     }
//     console.log(plus1);
// };

// plus(5);

// new Date();

// let d = new Date();

// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());


//////////////////////////////////////////////////////

// recursion(rucursive function);
// base condition

// function myRecurse(number) {
    
//     console.log(number);
//     let num = number - 1;
//     // base condition
//     if (num >= 5) {
//         myRecurse(num)
//     }
    
// }

// myRecurse(10);

// Map()/Set()/WeakMap()/WeakSet() => data structure

// new Set();

// const arr = [1, 1, 2, 2, 3, 4, 5];
// const set = new Set([1, 1, 1, 2, 2, 3, 4, 5]);
// const uniqueValue = [...set];

// console.log(uniqueValue);

// set ga malumot quwiw
// const set = new Set([1, 2, 3,]);
// set.add(100);
// set.add('Salom');
// set.add([1, 2, 3]);
// set.add({title: 'Webbrain'});

// console.log(set[0]); => set unordered qiymat saqlaydi, index mavjud emas!!!
// console.log(set);

// /////////////////////////////

// set dagi malumotni tekshirish
// const set = new Set([1, 2, 3,]);

// console.log(set.has(2));

// ////////////////////////////////

// set dan malumotni uchirish
// const set = new Set([1, 2, 3,]);
// set.delete(3);
// set.clear();
// console.log(set);

//////////////////////////////////////

// set da nechta malumot borligini tekshirish
// const set = new Set([1, 2, 3, 4]);
// let checkSize = set.size;

// console.log(checkSize);

// //////////////////////////////////////

// set qiymatlarini loop qilish
// let students = new Set();
// students.add('Jaloliddin')
//     .add('Sardorbek')
//     .add('Ohunjon');
///////////////////////////////
    
// for of()
// for (let name of students) {
//         console.log(name);
// }
//////////////////////////////

// forEach()
// students.forEach(name => {
//     console.log(name);
// })

//////////////////////////////////////////////////////////////

// WeakSet();

// let students = new WeakSet();
// let sardorbek = { name: 'Sardorbek' };
// students.add(sardorbek);

// console.log(students.has(sardorbek));

/////////////////////////////////////////////////////////////////


// new Map()
// let deviceColor = new Map();

// // map ga malumot qushish
// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');

// values, entries, keys
// console.log(deviceColor.keys());
// console.log(deviceColor.values());
// console.log(deviceColor.entries());

// map dan malumot ni uchirish
// deviceColor.delete('telefon');
// deviceColor.clear();
// console.log(deviceColor);

// map dan malumot olish
// let getValue1 = deviceColor.get('telefon');
// let getValue2 = deviceColor.get('laptop');

// console.log(getValue1);
// console.log(getValue2);
// console.log(deviceColor.size);

// ///////////////////////////////////////

// map qiymatlarini loop qilish
// let deviceColor = new Map();

// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');

// for (let entries of deviceColor) {
//     console.log(entries);
// }

// deviceColor.forEach((value, key, map) => {
//     // console.log(value);
//     // console.log(key);
//     console.log(map);
// })

/////////////////////////////////////////////////////

// object as a key in map

// let deviceColor = new Map();

// deviceColor.set('telefon', 'qora');
// deviceColor.set('laptop', 'kulrang');
// deviceColor.set({}, 'My key is object');

// console.log(deviceColor);


// WeakMap()

// let deviceColor = new WeakMap();

// deviceColor.set({}, 'qora');


// console.log(deviceColor);