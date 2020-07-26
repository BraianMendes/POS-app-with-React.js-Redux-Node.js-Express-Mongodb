// Use this as a template
const express = require("express");
const router = express.Router();
const CRUD = require("../models/crud_schema");
// new api endpoint start here

// INDEX operation
router.get("/crud", async (req, res) => {
  try {
    let data = await CRUD.find({}).sort({ created: -1 });
    res.json({
      result: "success",
      message: "Fetch CRUD data Successfully",
      data: data,
    });
  } catch (err) {
    res.json({ result: "error", message: err.msg });
  }
});

// CREATE operation
router.post("/crud", async (req, res) => {
  try {
    let doc = await CRUD.create(req.body);
 
    res.json({
      result: "success",
      message: "Create new data Successfully",
    });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});

// UPDATE operation
// Find By Id
router.get("/crud/:id", async (req, res) => {
  try {
    let data = await CRUD.findById({ _id: req.params.id });
    res.json({
      result: "success",
      message: "Fetch Single data Successfully",
      data: data,
    });
  } catch (err) {
    res.json({ result: "error", message: err.msg });
  }
});

// Then Update
router.put("/crud", async (req, res) => {
  try {
    let doc = await CRUD.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    );
 
    res.json({
      result: "success",
      message: "Update data Successfully",
    });
  } catch (err) {
    res.json({ result: "error", message: err.msg });
  }
});

// DELETE operation
router.delete("/crud/:id", async (req, res) => {
  try {
    let response = await CRUD.findOneAndDelete({ _id: req.params.id });

    res.json({
      result: "success",
      message: "Delete POS data Successfully",
    });
  } catch (err) {
    res.json({ result: "error", message: err.msg });
  }
});

module.exports = router;