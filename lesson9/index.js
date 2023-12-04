// 1-masala
function jaloliddinpow(son, daraja) {
  return son ** daraja;
}
console.log(jaloliddinpow(2, 5));

// 2-masala
function jaloliddinsqrt(son, daraja) {
  return son ** 0.5;
}
console.log(jaloliddinsqrt(64));

// 3-masala
function jaloliddincbrt(raqam, kub) {
  return raqam ** (1 / 3);
}
console.log(jaloliddincbrt(125).toFixed());

// 4-masala
function homeworkabs(son) {
  return (son > 0 && son) || (son < 0 && son * -1);
}
console.log(homeworkabs(8));

// 5-masala
function butunsonfloor(son) {
  return son % 2 === 0 || parseInt(son);
}
console.log(butunsonfloor(10.7));

// //6-masala
function exampleround(son){
    son >= parseInt(son) + 0.5 && console.log(parseInt(son) + 1);
    son <  parseInt(son)+ 0.5  && console.log(parseInt(son));
}
exampleround(90.2)


//  7-masala
function exampleCeil (son) {
    son > parseInt(son) && console.log(parseInt(son) + 2);
    son == parseInt(son) && console.log(parseInt(son) );
}

exampleCeil(50.40)
exampleCeil(50)


let schedule = {name: "Jaloliddin" };
    
    function isEmpty(schedule){
        for(let kalit in schedule){
            return false
        }
        return true
    }
    console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann : 160,
    Pete : 130
}
let sum = 0 ;

for(let kalit in salaries){
    console.log(kalit);
    console.log(salaries[kalit]);
    sum = sum + salaries[kalit]
}
console.log(sum);


let menu = {
    width : 200,
    height : 300,
    tittle : "My menu"
}

function multiPlyNumeric(obj) {
for( let kalit in obj) {
 if(typeof obj[kalit] === "number") {
     obj[kalit] *=2
      }
   }
 return obj
     }
            
 console.log(multiPlyNumeric(menu));
