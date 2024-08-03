// //array
// const myArr = [0,1,2,3,4]
// console.log(myArr[1]);
 
// myArr.push(5)
// console.log(myArr);
// myArr.pop() //pops last value
// console.log(myArr);
// myArr.unshift(10) //add to the front 
// myArr.shift() //remove it
// console.log(myArr.indexOf(20)) //bool
//                 //includes  //bool

// const newArr = myArr.join()
// console.log(newArr);

// //slice dont manipulate original array // splice manipulate original array 
// // push manipulate the main array 
// //concat creates new array 
// const marvel_heros = ['A', 'B', 'C', 'D']
// const dc_heros = ['E', 'F', 'G', 'H']
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);  //spread synstax

//use flat to concat all elements in same array 
let score1  = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))