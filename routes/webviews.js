const express = require('express');

const router = express.Router();

const createButtons = displayUrl => {
  return {
    messages:[
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            image_aspect_ratio: 'square',
            elements: [{
              title: 'Welcome!',
              subtitle: 'Choose your preferences',
              buttons:[
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (compact)',
                  messenger_extensions: true,
                  webview_height_ratio: 'compact' // Small view
                },
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (tall)',
                  messenger_extensions: true,
                  webview_height_ratio: 'tall' // Medium view
                },
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (full)',
                  messenger_extensions: true,
                  webview_height_ratio: 'full' // large view
                }
              ]
            }]
          }
        }
      }
  ]};
};

router.get('/buttons', (request, response) => {
  const {userId, blockName} = request.query;

  const displayUrl = `https://chatfuel-demo-bot.glitch.me/webviews/show-webview?userId=${userId}&blockName=${blockName}`;

  response.json(createButtons(displayUrl));   
});

router.get('/show-webview', (request, response) => {
  const {userId, blockName} = request.query;
  
  response.render('showWebview', {pageTitle: 'This is my page', userId, blockName});
});


module.exports = router;