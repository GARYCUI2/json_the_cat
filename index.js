// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const handleBreedDescription = (error, desc) => {
  console.log(error);
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, handleBreedDescription);
