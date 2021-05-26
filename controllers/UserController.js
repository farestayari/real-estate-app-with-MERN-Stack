const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
    createJWT,
 } = require("../utils/user");
const User = require('../models/user');
 const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//signup
exports.signup = (req, res, next) => {
    let { name, email, password, password_confirmation,role} = req.body;
    let errors = [];
    if (!name) {
      errors.push({ name: "required" });
    }
    if (!email) {
      errors.push({ email: "required" });
    }
    if (!role) {
      errors.push({ role: "required" });
    }
    if (!emailRegexp.test(email)) {
      errors.push({ email: "invalid" });
    }
    if (!password) {
      errors.push({ password: "required" });
    }
    if (!password_confirmation) {
      errors.push({
       password_confirmation: "required",
      });
    }
    if (password != password_confirmation) {
      errors.push({ password: "mismatch" });
    }
    if (errors.length > 0) {
      return res.status(422).json({ errors: errors });
    }
    user.findOne({email: email})
    .then(user=>{
       if(user){
        console.log("1");
        console.log(user);
          return res.status(422).json({ errors: [{ user: "email already exists" }] });
       }else {
          let userBody = new User({
            name: name,
            email: email,
            password: password,
            role : role
          });
          console.log(userBody);
          bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;
            userBody.password = hash;
            userBody.save()
                .then(response => {
                  console.log(response);
                   res.status(200).json({
                     success: true,
                     result: response
                   })
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                     errors: [{ error: "zzzzzz" }]
                  });
               });
            });
         });
        }
     }).catch(err =>{
       console.log(err);
         res.status(500).json({
           errors: [{ error: "loool" }]
         });
     })
   }
 

   //signin
   exports.signin = (req, res) => {
    let { email, password } = req.body;

    let errors = [];
    if (!email) {
      errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
      errors.push({ email: "invalid email" });
    }
    if (!password) {
      errors.push({ passowrd: "required" });
    }
    if (errors.length > 0) {
     return res.status(422).json({ errors: errors });
    }

    User.findOne({ email: email }).then(user => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
         bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
             return res.status(400).json({ errors: [{ password:"incorrect" }] 
             });
            }
            let access_token = createJWT(
                user.email,
                user._id,
                3600
              );
              jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
       decoded) => {
                if (err) {
                  console.log(err+"1");
                   res.status(500).json({ erros: err });
                }
                if (decoded) {
                    return res.status(200).json({
                       success: true,
                       token: access_token,
                       message: user
                    });
                  }
                });
               }).catch(err => {
                console.log(err+"2");
                 res.status(500).json({ erros: err });
               });
             }
          }).catch(err => {
            console.log(err+"3");
             res.status(500).json({ erros: err });
          });
       }