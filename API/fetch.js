

fetch('https://api.github.com/users/arabhijit2003')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))