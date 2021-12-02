const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL,(error,response,body) => {
    const data = JSON.parse(body);
    // handler error from request
    if (error !== null) {
      callback(error, null);
    } else {
      if (data.length === 0) {
        callback(Error("not found"), null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};


module.exports = { fetchBreedDescription };