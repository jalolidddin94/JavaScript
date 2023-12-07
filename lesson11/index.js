// 1-masala

// let person = {
//     id : 1,
//     name : "Jaloliddin",
//     age : 78,
//     child : {
//         id : 1,
//         name : "Ali",
//         age : 48,
//     child :{
//         id : 1,
//         name : "Umar",
//         age : 20
//     }

//     }

// };

// let sum = 0;
// while(1){

//     if(person)
//     {console.log(person.age);
//         sum = sum + person.age
//     } else{
//         break;
//     }
//     person = person.child;
// }
// console.log(sum);

let arr =[
    {id: 1, name: 'jaloliddin'},
    {id: 2,  name: 'fozil'},
    {id: 3,  name: 'oxunjon'},
    {id: 4,  name: 'alibek'},
]

function onSearch  (example) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name.toLowerCase().includes(example.toLowerCase())){
            newArr.push(arr[i])


        }
    }
    console.log(newArr);
}
onSearch("j");

