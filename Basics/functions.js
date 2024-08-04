// function sayMyName(){
//     //format of function 
// }

// function add(number1 , number2){
// //   console.log( number1+number2);
//    result = number1+number2 
//    //return number1+number2
//    return result //nothing works after return
// }

// add(5,6)  //cant be stored in a variable as it dont return anything.....it just executes consol.log

// console.log(add(1,7));

function loginUserMessage(username) {
    if (!username) {
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
    }

console.log(loginUserMessage());
