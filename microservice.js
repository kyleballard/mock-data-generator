const http = require('http');
var opn = require('opn');
 
http.get('http://faker.hook.io/?property=image.image&locale=en', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
   data = data.replace('"','');
   console.log(data);
   opn(data);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});