const property = require('../models/property');
const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: ((req, file, callback) => {
    callback(null, 'public/images/properties');
  }),
  filename(req, file, callback) {
    callback(null, new Date().getTime() + '_' + file.originalname);
  }
})

exports.upload = multer({
  storage: storage,
  limits: {fileSize: 2000000},
  fileFilter(req, file, callback) {
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|webp)/)) {
      return callback(new Error('File must be an image'));
    }
    return callback(null, true);
  }
})



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
  let imageUrl  = []
  req.files.forEach(file => {
    console.log(file)
    imageUrl.push(file.path.replace('public\\', '/'));
  })
  console.log(imageUrl)
    const newproperty = new property({
      user : req.user.id,
      propertytitle : propertytitle,
      bedrooms : bedrooms,
      description : description,
      price : price,
      image : imageUrl,
      surface : surface,
      address : address,
      city : city,
      date : date ,
    });
    
    
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
      const properties = await property.find({user : req.user.id});
      res.json({properties});
    } catch (error) {
      console.log(error);
    }
  };

//get Featured properties
exports.getFeaturedProperty = async (req , res) => {
  try{
      const properties  = await property.find().sort({ updatedDate : -1});
      res.json ({properties});
  }catch(error){
    console.log(error);
  }
}

exports.searchProperty = async (req , res) => {
  try{
    const properties = await property.find({city : req.body.location});
    res.json({properties});
  }catch(error){
    console.log(error);
  }
}

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

// This function will catch the errors thrown by uploadImage() function , it must have 4 parameters
exports.addPropertiesErrorCatcher =  (error, req, res, next) => {
  res.status(400).send({error: error.message});
};

