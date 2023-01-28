'use strict';

var utils = require('../utils/writer.js');
var Customers = require('../service/CustomersService');

module.exports.deleteCustomerByIdV1 = function deleteCustomerByIdV1 (req, res, next, customerId) {
  Customers.deleteCustomerByIdV1(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerByIdV1 = function getCustomerByIdV1 (req, res, next, customerId) {
  Customers.getCustomerByIdV1(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCustomersV1 = function listCustomersV1 (req, res, next, pageNumber, pageSize) {
  Customers.listCustomersV1(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomerByIdV1 = function updateCustomerByIdV1 (req, res, next, body, customerId) {
  Customers.updateCustomerByIdV1(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CustomersPOST = function v1CustomersPOST (req, res, next, body) {
  Customers.v1CustomersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
