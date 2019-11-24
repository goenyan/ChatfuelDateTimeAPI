const express = require('express');

const router = express.Router();

// Verify an email address
router.get('/email', (request, response) => {
    const {email} = request.query;
  
    const checkValidMxRecord(email)
      .then(emailData => {
        response.json({});
      
    })
    .catch(error => {
      response.json({});
    });
  
    // 1. Simple check if it's an email - has it got an @ sign in it?

    // 2. Perform an MX lookup - check if the DNS record exists

    // 3. Check if the lookup response contains ENOFOUND or ENODATA - if so, it's not valid

    // 4. If we get a response, it's valid

    // 5. Set some Chatfuel attributes
});

module.exports = router;
