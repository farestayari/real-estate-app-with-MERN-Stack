const express=require('express');
const router=express.Router();
const { signup, signin } = require('../controllers/User');
const { route } = require('./Property');


router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;