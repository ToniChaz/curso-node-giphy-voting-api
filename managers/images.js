'use strict';

const request = require('request');

const GIPHY_SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q={{TERM}}&api_key=dc6zaTOxFJmzC';

function getGif(term, cb) {
   if (!term) {
     return cb(new Error('Empty term'));
   }

   let search_url = GIPHY_SEARCH_URL.replace('{{TERM}}', term);

   request({
     uri: search_url,
     json: true
   }, function (err, response, body) {
      if (err) return cb(err);

      if (!response.statusCode === 200) {
        return cb(err);
      }

      if (!body.data || !body.data.length ) {
        return cb(new Error('No image found'));
      }

      return cb(null, body.data[0]);
   });

}

module.exports = {
  getGif
};
