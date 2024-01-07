function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


function countSheeps(sheep) {
    return sheep.filter(sheep => sheep).length
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }



  function noSpace(x){
    return x.split(" ").join("")
  }