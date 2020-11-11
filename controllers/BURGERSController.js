const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const buger = require("../models/BURGERS.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  buger.all(function(data) {
    const bugerObject = {
      // database where should match the index handl
      burgers: data
    };
    console.log(data)
    /// syntax
    res.render("index", bugerObject);
  });
});

//many key to loop

// Events 
router.post("/api/BURGERS", function(req, res) {
  buger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/BURGERS/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  buger.update({
    // colume from database
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/BURGERS/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  buger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
