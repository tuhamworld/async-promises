const url = prompt("Enter your URL here")


// Step 1 - We have to call them before they can run
async function getData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result
}

// getData(url)



// Step 2 - They run immediately once JS gets to them without being called.
(async () => {
    const result = await getData(url);
    console.log(result);
})();