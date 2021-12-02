const request = require('request');

const argu = process.argv.splice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${argu}`;

request(URL,(error,response,body) => {
  if (error) {
    console.log("there is an error!!! bad bad");
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("status code not 200");
    return;
  }
  
  console.log(data[0].description);

});