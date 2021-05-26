const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const isAuth = require('../middlewares/isAuth');
const Property = require("../models/property");
const validatePropertyInput = require("../controllers/propvalidation");

//add new property
router.post("/addproperty" ,isAuth,async (req, res) => {
    const { propertytitle ,bedrooms,description,price,surface,images,address,city,date } = req.body;
    try {
      const newproperty = new Property({
        propertytitle,
        bedrooms,
        description,
        price,
        surface,
        images,
        address,
        city,
        date ,
      });
      const Property = await newproperty.save();
      res.json({ msg: "property added", Property });
    } catch (error) {
      console.log(error);
    }
  });
//get properties

router.get("/getproperty", async (req, res) => {
    try {
      const properties = await property.find();
      res.json({ msg: "property recuperated",  });
    } catch (error) {
      console.log(error);
    }
  });
//delete property

router.delete("/deleteproperty/:_id",async (req, res) => {
    const { _id } = req.params;
    try {
      const property = await property.findOneAndDelete({ _id:_id });
      res.json({ msg: "property deleted", property });
    } catch (error) {
      console.log(error);
    }
  });
//edit property

router.put("/editproperty/:_id",async (req, res) => {
    const { _id } = req.params;
    try {
      const property = await property.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "property edited", property });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = router;