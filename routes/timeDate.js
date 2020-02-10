const express = require('express');

const router = express.Router();

const ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

const getUserDateInTimezone = offsetInHours => {
  const utcDate = Date.now();
  
  const offsetInMilliseconds = ONE_HOUR_IN_MILLISECONDS * offsetInHours;
  
  return new Date(utcDate + offsetInMilliseconds);
};

router.get('/', (request, response) => {
  const {timezone = 0} = request.query;
  
  const userDateInTimezone = getUserDateInTimezone(timezone);
  
  const dateObject = {
    day: date.getDate()
  };
  
  const userAttributes = {
    set_attributes: {
      userDate: userDateInTimezone
    }
  };
  
  response.json(userAttributes);
});


module.exports = router;
