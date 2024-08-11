// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //Db calls, cryptography
//     setTimeout(function(){
//         console.log('Async task is complete');      //promise is created
//         resolve();  //otherwise it wont be resolved 
//     },1000)
// })

// promiseOne.then(
//     function(){
//         console.log('Promise consumed');
        
//     })     //.then connected to resolve

//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');      //promise is created
//         resolve();  //otherwise it wont be resolved 
//         },1000)
//     }).then(
//         function(){
//             console.log('Consumed 2');
            
//         }
//     )

// const promiseThree = new Promise(function(resolve, reject){
//     resolve({userName: 'Abhijit', email: 'arabhijit2003@gmail.com'});
// },4000)

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({userName: 'Abhijit', email: 'arabhijit2003@gmail.com'})
//         }
//         else {
//             reject ('ERROR 404')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.userName
// })
// .then((userName)=> {
//     console.log(userName);
// })
// .catch(function(error){            //catch required during error
//     console.log(error);
    
// })
// .finally(() => console.log('Promise resolved'))

const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if(!error){
                resolve({userName: 'Abhijit', password: 'arabhijit2003'})
            }
            else {
                reject ('ERROR: file corrupted')
            }
        },1000)
    })

    //async wait ....wait for the task to be completed or else give error
// async function consumeFive() {
//    const response =  await  promiseFive   //cant handle errors directly 
//    console.log(response);
   
// }

//try and catch used to handle errors
async function consumeFive() {
    try{const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error)
        
    }
}

consumeFive()