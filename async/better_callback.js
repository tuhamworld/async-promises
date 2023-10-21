async function getData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result

}

async function getAllData(url) {
    const result = await getData(url);
    console.log('Success 1', result)

    const result1 = await getData('https://jsonplaceholder.typicode.com/users/1');
    console.log('Sucess 2', result1);

    const result2 = await getData('https://jsonplaceholder.typicode.com/users/2');
    console.log('Success 3', result2);

    const result3 = await getData('https://jsonplaceholder.typicode.com/users/3');
    console.log('Success 4', result3)
}

const url = prompt(`Hello Tunde,
Please Enter your URL`)
getAllData(url);