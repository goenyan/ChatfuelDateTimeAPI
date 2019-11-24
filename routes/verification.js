const express = require('express');

const router = express.Router();

// Simple check if it's an email - has it got an @ sign in it?
const isValidEmailAddress = email => {
};

// Check if the lookup response contains ENOFOUND or ENODATA - if so, it's not valid
const hasMxRecordError = error => {
};

// Perform an MX lookup - check if the DNS record exists
const findMxRecords = email => {
  // Find the domain name from the email

  // If we get a valid MX record response, it's a valid email
};

// Verify an email address
router.get('/email', (request, response) => {
  // Get email from the request query parameters

  // Set some Chatfuel attributes
});

module.exports = router;
