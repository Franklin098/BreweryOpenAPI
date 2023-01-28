'use strict';

var utils = require('../utils/writer.js');
var Beers = require('../service/BeersService');

module.exports.deleteBeerByIdV1 = function deleteBeerByIdV1 (req, res, next, beerId) {
  Beers.deleteBeerByIdV1(beerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBeerByIdV1 = function getBeerByIdV1 (req, res, next, beerId) {
  Beers.getBeerByIdV1(beerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listBeersV1 = function listBeersV1 (req, res, next, pageNumber, pageSize) {
  Beers.listBeersV1(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBeerByIdV1 = function updateBeerByIdV1 (req, res, next, body, beerId) {
  Beers.updateBeerByIdV1(body, beerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1BeersPOST = function v1BeersPOST (req, res, next, body) {
  Beers.v1BeersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
