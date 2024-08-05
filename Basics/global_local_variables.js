// let a=10 
// let b =30
// function scope(){
//     let b = 20     //prioity of local variable is more that global 
//     console.log(`a is ${a} and b is ${b}`);
// }
// scope()
// console.log(`a is ${a} and b is ${b}`);

//nested scope 
// function one(){
//     const userName = 'abhijit'
//     function two(){
//         const website = 'youtube'
//         console.log(userName);
        
//     }
//     console.log(website);
//     two()
    
// }
// one()

//+++++++++++++++important+++++++++++++++++++++++++

addone(5) //accessible  
function addone(num){
    return num + 1
    }

addTwo(5) //cannot be accessed 
const addTwo = function (num) {
     return num + 2                 
}