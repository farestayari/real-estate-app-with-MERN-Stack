const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers['x-auth-token'];
    // Check token
    if (!token)
      return res.status(401).send({ msg: 'No Token, authorization denied' });

    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    
    // Add User from payload
    console.log(decoded);
    console.log(decoded.userId);
    const user = await User.findById(decoded.userId);

    //Check for user
    if (!user) {
      return res.status(401).send({ msg: 'authorization denied' });
    }
    // Create user
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ msg: 'Token is not valid' });
  }
};
module.exports= {isAuth}