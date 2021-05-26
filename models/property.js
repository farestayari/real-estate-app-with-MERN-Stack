const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new  Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
    propertytitle: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // image:{
    //     type: String,
    //     required: false
    // },
    price:{
        type: String,
        required: true
    },
    surface:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
//     likedByUser: [{
//       user_id: String, 
//       userFullName: String, 
//    }],

});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;