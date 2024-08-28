const express=require("express");
const router=express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const UserController = require("../controllers/users.js");



//signup
router
.route("/signup")
.get(UserController.renderSignUpForm)
.post(
    wrapAsync(UserController.signUp)
);

//login 
router
.route("/login")
.get(UserController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate(
        "local",
        {failureRedirect:"/login",
         failureFlash:true,
        },
    ),
    UserController.login
);

//logout
router.get("/logout",UserController.logOut);





module.exports = router;