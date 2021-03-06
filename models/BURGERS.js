


// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//interfaces
//classes
//methods
const BURGERS = {
  all: function(cb) {
    orm.all("BURGERS", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("BURGERS", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("BURGERS", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("BURGERS", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = BURGERS;
