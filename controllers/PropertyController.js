const property = require('../models/property');

//add new property
exports.addproperty = async(req, res,) => {
const { propertytitle ,bedrooms,description,price,surface,address,city,date} = req.body;
try {
    let errors = [];
  if (!propertytitle) {
    errors.push({ propertytitle: "required" });
  }
  if (!bedrooms) {
    errors.push({ bedrooms: "required" });
  }
  if (!description) {
    errors.push({ description: "required" });
  }
  if (!price) {
    errors.push({ price: "required" });
  }
  if (!surface) {
    errors.push({ surface: "required"});
  }
  
  if (!address) {
    errors.push({ address: "required"});
  }
  if (!city) {
    errors.push({ city: "required"});
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
    const newproperty = new property({
      propertytitle,
      bedrooms,
      description,
      price,
      surface,
      address,
      city,
      date ,
    });
    const Property = await newproperty.save();
    res.json({ msg: "property added", Property });
  } catch (error) {
    console.log(error);
  }}

//get properties
exports.getproperty=async (req, res) => {
    try {
      const properties = await property.find();
      res.json({properties});
    } catch (error) {
      console.log(error);
    }
  };

//delete property
exports.deleteproperty=async (req, res) => {
    const { _id } = req.params;
    try {
      const property = await property.findOneAndDelete({ _id:_id });
      res.json({ msg: "property deleted", property });
    } catch (error) {
      console.log(error);
    }
  };

  //edit property
exports.editproperty=async (req, res) => {
    const { _id } = req.params;
    try {
      const property = await property.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "property edited", property });
    } catch (error) {
      console.log(error);
    }
  };
