'use strict';


/**
 * Delete Beer by Id
 * Delete a single **Beer** by its Id value.
 *
 * beerId UUID Beer Id
 * no response value expected for this operation
 **/
exports.deleteBeerByIdV1 = function(beerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Beer by Id
 * Get a single **beer** by its Id value.
 *
 * beerId UUID Beer Id
 * returns Beer
 **/
exports.getBeerByIdV1 = function(beerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 28,
  "price" : 12.45,
  "name" : "amazing beer",
  "bewery" : {
    "name" : "Hainiken",
    "location" : "Germany"
  },
  "style" : "IPA",
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
 * List Beers
 * Get a list of beers in the system
 *
 * pageNumber Integer Page Number (optional)
 * pageSize Integer Page Size (optional)
 * returns BeerPagedList
 **/
exports.listBeersV1 = function(pageNumber,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "content" : [ {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "quantity" : 28,
    "price" : 12.45,
    "name" : "amazing beer",
    "bewery" : {
      "name" : "Hainiken",
      "location" : "Germany"
    },
    "style" : "IPA",
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
 * Update a Beer by Id
 * Update fields of a beer by its Id value
 *
 * body Beer  (optional)
 * beerId UUID Beer Id
 * no response value expected for this operation
 **/
exports.updateBeerByIdV1 = function(body,beerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * New Beer
 * Create a new Beer
 *
 * body Beer 
 * no response value expected for this operation
 **/
exports.v1BeersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

