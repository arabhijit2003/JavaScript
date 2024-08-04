// //singleton
// //object literals
// const sym = Symbol("key1")

// const jsUser =  {
//     name : "Abhijit",
//     age : 21 ,
//     loc : "Agt",
//     email : "arabhijit2003@gmail.com",
//     isLoggedin : true
//  //   [sym] : "mykey1"

// }  //format of object 
// console.log(jsUser);

// Object.create //constructor method 

// console.log(jsUser['name']);

// jsUser.greeting = function(){
//     console.log(`Hello user ${this.name}`);
    
// }

// console.log(jsUser.greeting());
 
//objects inside object 
const user = {
    email : 'abhijit@gmail.com',
    fullName : {
        firstName : 'Abhijit',
        lastName : 'Roy'
    }
}

// console.log(user.fullName);
// console.log(user.firstName);
// console.log(user.fullName.firstName);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

//most convenient is to use spread 
const obj4 = {...obj1,...obj2}
console.log(obj4);

//APIs 
format
[{} {} {}] //array of obj
