//Immdiately Invoked Function Expressions (IIFE)

(function chai() {
    console.log('DB CONNECTED');
        })()  ;    //IIFE ....used to remove global scope pollution 
 
//without semicolon the next function wont work 
(function code() {
    console.log('CODE CONNECTED');
})()  ;

((name)=> {
    console.log(`DB connected ${name}`);
    
}) ('Abhijit')