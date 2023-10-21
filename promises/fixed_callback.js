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
        console.log('Success 1', result);
        return getData("https://reqres.in/api/users/1");
    }).then((result) => {
        console.log('Success 2', result);
        return getData('https://reqres.in/api/users/2');
    }).then((result) => {
        console.log('Success 3', result);
        return getData('https://reqres.in/api/users/3');
    }).then((result) => {
        console.log('Success 4', result)
    }).catch(status => {
        console.log(`This is an error of status ${status}`)
    });