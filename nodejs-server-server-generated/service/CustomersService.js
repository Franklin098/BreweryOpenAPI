'use strict';


/**
 * Delete Customer by Id
 * Delete a single **Customer** by its Id value.
 *
 * customerId UUID Customer Id
 * no response value expected for this operation
 **/
exports.deleteCustomerByIdV1 = function(customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Customer by Id
 * Get a single **Customer** by its Id value.
 *
 * customerId UUID Customer Id
 * returns Customer
 **/
exports.getCustomerByIdV1 = function(customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Jhon",
  "lastName" : "Smith",
  "address" : {
    "zipCode" : "33701",
    "city" : "St pete",
    "state" : "AL",
    "line1" : "123 main"
  },
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Customers
 * Get a list of customers in the system
 *
 * pageNumber Integer Page Number (optional)
 * pageSize Integer Page Size (optional)
 * returns CustomerPagedList
 **/
exports.listCustomersV1 = function(pageNumber,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "content" : [ {
    "firstName" : "Jhon",
    "lastName" : "Smith",
    "address" : {
      "zipCode" : "33701",
      "city" : "St pete",
      "state" : "AL",
      "line1" : "123 main"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "firstName" : "Jhon",
    "lastName" : "Smith",
    "address" : {
      "zipCode" : "33701",
      "city" : "St pete",
      "state" : "AL",
      "line1" : "123 main"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Customer
 * Update a customer by its Id value
 *
 * body Customer 
 * customerId UUID Customer Id
 * no response value expected for this operation
 **/
exports.updateCustomerByIdV1 = function(body,customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * New Customer
 * Create a new customer
 *
 * body Customer 
 * no response value expected for this operation
 **/
exports.v1CustomersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

