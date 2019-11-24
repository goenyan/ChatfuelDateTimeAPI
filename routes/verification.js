const dns = require('dns');
const express = require('express');

const router = express.Router();

const isValidEmailAddress = email => {
  return new Promise((resolve, reject) => {
    const isEmail = email.includes('@');
    if (isEmail) {
      resolve();
    } else {
      reject(new Error('Invalid email address as it does not contain an @ symbol'));
    }
  })
};

const findMxRecords = email => {
  const [,domain] = email.split('@');
  
  return dns.resolveMx
};

// Verify an email address
router.get('/email', (request, response) => {
    // Get email from the request query parameters
    const {email} = request.query;
  
    // Simple check if it's an email - has it got an @ sign in it?
    isValidEmailAddress(email)
      .then(() => findMxRecords(email))
      .then(emailMxRecords => {
        response.json({
          set_attributes: {
            emailValid: true
          }
        });
      })
      .catch(error => {
        response.json({
          set_attributes: {
            emailValid: false
          }
        });
    });

    // Perform an MX lookup - check if the DNS record exists

    // Check if the lookup response contains ENOFOUND or ENODATA - if so, it's not valid

    // If we get a response, it's valid

    // Set some Chatfuel attributes
});

module.exports = router;
