const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        minlength: 3,
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
      },
      about: {
        type: String
      },
      mobile: {
        type: Number,
        required: false,
      },
      socialMedia: {
        facebook: {
          type: String
        },
        twitter: {
          type: String
        },
        linkedin: {
          type: String
        }
      },
      registrationDate: { type: Date, default: Date.now 
      }, 
      lastLogin:  { type: Date, default: Date.now
      },
      role:{
        type:String,
        required: true
      }
    });

const User = mongoose.model("User", userSchema);

module.exports = User;