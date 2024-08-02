let score = '33'
let scoreABC = '33abc'
console.log(typeof score);
let valuNumber = Number(score)
console.log(typeof valuNumber);
let valuNumberABC = Number(scoreABC)
console.log(valuNumberABC) //gives NaN(Not a Number)

//  "33"=> convert to number
// "33abc" => convert to number but value is NaN
//bools => 1/2 