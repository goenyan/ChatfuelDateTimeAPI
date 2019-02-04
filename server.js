const express = require('express');
const app = express();

// GET endpoint
app.get('/', function(request, response) {
  response.send('OK');
});

// Start the server and listen for incoming requests
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
