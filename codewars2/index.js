function removeChar(str){
    return str.slice(1, -1)

    };
   

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum ;
    }, 0) ;
    } ;
    (squareSum(4 , 5));
    function repeatStr (n, s) {
        return s.repeat(n);
      }