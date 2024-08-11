const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Db calls, cryptography
    setTimeout(function(){
        console.log('Async task is complete');      //promise is created
        resolve();  //otherwise it wont be resolved 
    },1000)
})

promiseOne.then(
    function(){
        console.log('Promise consumed');
        
    })     //.then connected to resolve

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');      //promise is created
        resolve();  //otherwise it wont be resolved 
        },1000)
    }).then(
        function(){
            console.log('Consumed 2');
            
        }
    )