const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const isAuth = require('../middlewares/isAuth').isAuth;
const property = require("../models/property");


const {addproperty,getproperty,deleteproperty,editproperty , upload , getFeaturedProperty , searchProperty , addPropertiesErrorCatcher} = require("../controllers/PropertyController");

//add new property
router.post("/addproperty",isAuth,upload.array(['images']),addproperty , addPropertiesErrorCatcher);
//get properties

router.get("/getproperty",isAuth,getproperty);
//delete property

router.delete("/deleteproperty/:_id",isAuth,deleteproperty)
//edit property

router.put("/editproperty/:_id",isAuth,editproperty)

router.get('/getFeatured' , getFeaturedProperty)

router.get('/searchProperty' , searchProperty)
  
module.exports = router;