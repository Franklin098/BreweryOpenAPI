'use strict';

var utils = require('../utils/writer.js');
var OrderService = require('../service/OrderServiceService');

module.exports.v1CustomersCustomerIdOrdersPOST = function v1CustomersCustomerIdOrdersPOST (req, res, next, body, customerId) {
  OrderService.v1CustomersCustomerIdOrdersPOST(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
