const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// GET endpoint
app.get('/', function(request, response) {
  response.send('OK');
});

app.post('/attributes/reset', (request, response) => {
  const keyNames = Object.keys(request.body);
  
  let attributes = {};
  keyNames.forEach(keyName => {
    attributes[keyName] = null;
  });
  
  response.json({set_attributes: attributes});
});

// Start the server and listen for incoming requests
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
