const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl }=require("../middleware.js");
const userController =require("../controllers/users.js");

router.route("/signup")
      .get(userController.renderSignupForm) // signup form route
      .post( wrapAsync(userController.signup)); //post signup form route

router.route("/login")
       .get(userController.renderLoginForm)  //render login form route
       .post( saveRedirectUrl,
    passport.authenticate("local",{failureRedirect:"/login", failureFlash:true}),
     userController.login);  //post login form route


     
router.get("/logout", userController.logout);  //logout route

module.exports = router ;