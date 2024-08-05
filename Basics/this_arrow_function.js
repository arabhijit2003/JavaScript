// const user = {
//     username: "hitesh",
//     price: 999,
//     welcomeMessage: function() {
//     console.log( `${user.username}, welcome to website`);  //this is used for current context
//     }
//     }

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// function chai(){
//     console.log(this);
    
// }
// chai()

//Arrow function
// const fun = () => {
//     console.log(this);
    
// }
// fun()

//implicit return of arrow function 
const addTwo = (num1,num2) => num1 + num2

console.log(addTwo(5,6))
