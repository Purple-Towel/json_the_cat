let fetchBreedDescription = require('./breedfetcher').fetchBreedDescription;
let breedToFetch = process.argv[2];

fetchBreedDescription(`${breedToFetch}`, (error, description) => {
  if (error) {
    console.log(`Fetch Error Details: ${error}`);
  } else {
    console.log(description);
  }
});

