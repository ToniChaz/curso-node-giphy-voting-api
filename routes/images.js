'use strict';

const express = require('express');
const images = require('../managers/images');
const request = require('request');

const routes = express.Router();

routes.get('/:term', function(req, res, next) {
  let term = req.params.term;

  images.getGif(term, function(err, gifData) {
     if (err) return next(err);

    res.send(gifData);

  });

});

routes.get('/:term/gif', function(req, res, next) {
  let term = req.params.term;

  images.getGif(term, function(err, gifData) {
     if (err) return next(err);

     //res.setHeader('Content-type', 'image/gif');
    //res.setHeader('Content-type', 'image/gif');

//    res.send(`<img src="${gifData.images.fixed_width.url}" />`)
//    res.redirect(gifData.images.fixed_width.url);

//      request(gifData.images.fixed_width.url).pipe(res);
      request('http://google.com').pipe(res);

  });

});

module.exports = routes;
