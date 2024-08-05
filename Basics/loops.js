// for(let index=0;index<10;index++){
//     const element = index;
//    // console.log(element);
// }

for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= i; j++) {
        console.log(i + '*' + j + '=' + i*j);

    }
}
