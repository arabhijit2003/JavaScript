const arr = [ 1,2,3,4,5]

//for of 
// for (const num of arr) {
//    // console.log(num);
    
// }

// const greetings = 'Hello world'
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`);
// }

//maps
// const map  = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United States Of America')
// map.set('FR', 'France')
// map.set('IN', 'Ind')   //not printed as its duplicate

// console.log(map);
// for (const [key,value] of map ) {     //[] to destructure key nd value to print whtever needed
//     console.log(key + ' : ' + value);
    
// }

// //objects 
// const myobj = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift'
// }

// for (const key in myobj) {
//     console.log(`key is ${key} and value is ${myobj[key]}`);
    
// }

//for each 
const coding = ['js','cpp','ruby','python']
// coding.forEach(function (item){
//     console.log(`item is ${item}`);
    
// }  )

//foreach using arrow function
// coding.forEach( (val)=>{
//     console.log(val);
    
// })

function print(item, index){
    console.log(item, index);
    
}
coding.forEach(print)