//  A callback with success and error handlers

function getData(url, success, error) {
    if (url === null) {
        return;
    }

    // load content of page from url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            success(xhr.responseText); // Run success callback
        } else {
            error(xhr.status); // Run error callback
        }

    };
}

function success(result) {
    // console.log("Finally done!");
    console.log(result);
}

function error(status) {
    console.log(`An error with status code ${status}
    occured: `);
}

const url = prompt("Enter a URL");

// Call the function
getData(url, (res1) => {
    console.log("Success 1", res1);
    getData("https://reqres.in/api/users/1", (res2) => {
        console.log("Success 2", res1);
        getData("https://reqres.in/api/users/2", (res3) => {
            console.log("Success 3", res1);
            getData("https://reqres.in/api/users/1", (res4) => {
                console.log("Success 4", res1);
                
            }, error)
        }, error)
        
    }, error)
}, error)