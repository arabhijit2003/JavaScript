// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item 
    
// } )

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =mynums.filter( (num) => num>4 )
// console.log(newNums);

const newNums = []

mynums.forEach(element => {
    if(element>4){
        newNums.push(element)
    }
});
console.log(newNums);

