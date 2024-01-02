// Recursion functions
let result = 0 ;
const sum = (n) => {
    if(n === 2) return (result += 2) ;
    else{
        result += n;
        return sum (n-2)
    } 
};
sum(10)
console.log(result);