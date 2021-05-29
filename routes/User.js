const express=require('express');
const router=express.Router();
const { signup, signin, authuser, getallusers, updateuser } = require('../controllers/UserController');
const { isAuth } = require('../middlewares/isAuth');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/authuser',isAuth,authuser);
router.get("/allusers",isAuth,getallusers);
router.put("/updateuser",isAuth,updateuser);

module.exports = router;