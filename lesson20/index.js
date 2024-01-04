// Error handing

// try {
    // hatoga sabab bulishi mumkin bulgan code
    // let myFunc = add(5, 5)
    // console.log(myFunc);
// throw new Error("nimadir hato")
// } catch(e) {
//     // hatoni tutib olish
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
//     console.log(e);
// } finally{
//     console.log("Finally");
// }

// console.log(myFunc);

////////////////////////////////////////////////////////////

// Asinxron (asynchronous) Javascript
// 1-Browser web APIS => setTimeout(), setInterval(),
// 2-Backend bilan ma'lumot almashishda => callback, promise, async/await;
// 3-User interactions => DOM(event listeners);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000);

// console.log(3);

////////////////////////////////////////////////////////////

// setInterval()

// setInterval(() => {
// let d = new Date();
// console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`);
// },1000);

///////////////////////////////////////////////////////////

//callback

// console.log("Started...");

// let server = {
//     id : "jaloliddin",
//     password : 12345 ,
//     username : "karshiev"
// }

// let facebook = (pw, username, callback) =>{

// setTimeout(() =>{
    
//         if(server.password === pw && server.username === username){
//             callback("Welcome to facebook!!!")
//         } else {
//             callback("Login yoki parol hato!!!")
//         }
// },2000)

// }

// let user = facebook(12345, "karshiev",(data) => {
//     console.log(data);
//     console.log("Finished...");
// });

//////////////////////////////////////////////////////

//promise

console.log("Started...");

let server = {
    id : "jaloliddin",
    password : 12345 ,
    username : "karshiev"
}

let facebook = (pw, username, callback) =>{

let user = new Promise((resolve, reject) =>{

    setTimeout(() =>{
        
            if(server.password === pw && server.username === username){
                resolve("Welcome to facebook!!!")
            } else {
                reject("Login yoki parol hato!!!")
            }
    },2000)
    
})

user.then ((data) =>{
    console.log(data);
    console.log("Finished");
})
.catch(error => console.log(error))

}

facebook(12345, "karshiev")