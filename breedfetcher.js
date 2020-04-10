let request = require('request');

const fetchBreedDescription = function(breedName, callback) { // fetchBreedDescription takes a callback in.
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { //error, response, and body are values passed to the callback function
    if (error) {
      callback(error, null, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Server Code: ${response.statusCode}`, null);
      return;
    }
    let bodyJson = JSON.parse(body);
    if (!bodyJson.length) {
      callback(`${breedName} not found.`, null);
      return;
    }
    callback(null, bodyJson[0]['description']);
  });
};

//fetchBreedDescription('Siberian', breedDescriptionHandler);


//----------------
/*
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
*/

module.exports = {fetchBreedDescription};