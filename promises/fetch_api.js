const url = prompt("Enter the URL here")

fetch(url)
    .then((response) => {
        return response.json();
    }).then((result) => {
        console.log('Success!', result)
    }).catch(status => {
        console.log(`An error with status code ${status} occured`)
    });