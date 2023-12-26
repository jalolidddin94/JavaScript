

// let arr = [
//     {id : 1, name : "Jaloliddin"} ,
//     {id : 2, name : "xusniddin"} ,
//     {id : 3, name : "Muxiddin"} ,
// ]

// const onSearch = (put) => {
//     let arr1 = [];

//     for(let i = 0; i < arr.length ; i ++){
//         if(arr[i].name.toLowerCase().includes(put.toLowerCase())){
//             arr1.push(arr[i])
//         }
//     }
//     console.log(arr1);
// }
// onSearch("x")
///////////////////////////////////////////////////////

//Sort by number
// let arr =[2, 3, 4, 5, 6, 70, 80 , "9"0, 100] ;
// console.log(arr.sort((a, b) => a - b)) ;
// console.log(arr.sort((a, b) => b - a)) ;
///////////////////////////////////////////////////////

// sort by letter
// const arr = ["a", "b", "c", "d", "E", "F", "H", "J"]
// console.log(arr.sort((one, two) => one.localeCompare(two)));
// console.log(arr.sort((one, two) => two.localeCompare(one)));
////////////////////////////////////////////////////////


//Filter
// let num =[1, 2, 3, 4, 5, 6, 50, 60, 70, 80] ;
// let str = ["apple", "orange", "banana", "kiwi"]

// let result = num.filter((value, index) => {
//     return value < 10 ;
// })
// console.log(result);
// let result = str.filter(function(value, index) {
//     return value.length <= 4
// });
// console.log(result);
///////////////////////////////////////////////////////////

//forEach  Map
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, ] ;

// let result = num.forEach((value, index) =>{
//     // console.log(value + 2);
// });

// // console.log("========");
    
// let resmap = num.map((value, index) =>{
//     // console.log(value +2);
// })

// console.log(result);
// console.log("====================");
// console.log(resmap);
////////////////////////////////////////////////////////////


//Every, Some
// let num = [1, 2, 3, 4, 5, 6, 7, 8, "9" ] ;
// console.log(num.every(value => !isNaN(value)));
// console.log(num.every((value) => typeof value === "number"));

// console.log(num.some(value => !isNaN(value)));
// console.log(num.some((value) => typeof value === "number"));
/////////////////////////////////////////////////////////////


// Fill, copyWithin
// let num = [1, 2, 3, 4, 5, 6, 7, 8, "9" ] ; 
// console.log(num.fill("jaloliddin", 3, 4));

// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, ] ;
// console.log(a.copyWithin(0, 3, 6));
////////////////////////////////////////////////////////////

//reduce
// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, ] ;

// let result = a.reduce((sum, current,) => {
//     console.log(sum);
//     return sum += current 
// })
// console.log(result);
///////////////////////////////////////////////////////////


//Flat
// let num = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]];
// console.log(num.flat(Infinity).reduce((s,c) => s+c));
///////////////////////////////////////////////////////////

// new Map
// console.log(new Map([
//     ["a", 1],
//     ["b", 2],
// ]).keys()
// );

// console.log(Array.from("jaloliddin",(v) =>v.toUpperCase()));



 