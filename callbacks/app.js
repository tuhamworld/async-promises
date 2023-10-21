//  A callback with success and error handlers

function getData(url, success, error) {
    if (url === null) {
        return;
    }

    // load content of page from url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            success(xhr.responseText); // Run success callback
        } else {
            error(xhr.status); // Run error callback
        }

    };
}

function success(result) {
    console.log("Finally done!");
    console.log(result);
}

function error(status) {
    console.log(`An error with status code ${status}
    occured: `);
}

const url = prompt("Enter a URL");

// Call the function
getData(url, success, error)