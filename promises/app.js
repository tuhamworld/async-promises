//  A callback with success and error handlers

function getData(url) {
    return new Promise((resolve, reject) => {
        
  if (url === null) {
      reject("No URL Found");
  }

  // load content of page from url
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(xhr.responseText)
    } else {
      reject(xhr.status); // Run error callback
    }
        };
        
    })

    
}

const url = prompt("Enter a URL");
getData(url)
    .then((result) => {
        console.log("Success!");
        console.log(result);
    }).catch(status => {
        console.log(`An error with status code ${status} occured`)
    });