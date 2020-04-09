let request = require('request');
let breedInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
    console.log('status code: ', response && response.statusCode);
  }
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0]['description']);
  } else {
    console.log(`${breedInput} was not found.`);
  }
});