// const url = prompt("Enter your URL")

function getData(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    }).then((result) => {
        console.log('Success', result)
    }).catch(status => {
        console.log(`This thing ain\'t working fah ${status}`)
    })
}



const promises = [
    getData('https://reqres.in/api/users?page=2'),
    getData('https://reqres.in/api/users/2'),
    getData('https://reqres.in/api/users/4')
    
]
// Run API in parallel
// Promise.all(promises)
    
// Promise.all(promises)

Promise.any(promises)