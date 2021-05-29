const property = require('../models/property');
const multer = require('multer');
//add new property
exports.addproperty = async(req, res,) => {
const { propertytitle ,bedrooms,description,price,images,surface,address,city,date} = req.body;
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
  if (!images) {
    errors.push({ images: "required"});
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
      images,
      surface,
      address,
      city,
      date ,
    });
    const storage = multer.diskStorage({
        destination: './client/public/uploads/',
        filename: function (req, file, cb) {
            cb(null,file.originalname);
        }
    });
    
    const upload = multer({
        storage: storage
    }).single("image");
    
    // router.post('/image', (req, res) => {
    //     upload(req, res, (err) => {
    //         if (err){
    //             console.log(err);
    //         }
    //         if(!err)
    //             return res.send(200).end();
    //     });
    // });
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
