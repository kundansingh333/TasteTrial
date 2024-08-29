const User = require("../models/user.js");



//signup form
module.exports.renderSignUpForm = (req,res)=>{
    res.render("users/signup.ejs");
}

//signup
module.exports.signUp = async(req,res)=>{
    try {
        let{username,email,password}=req.body;
        const newUser = new User({email,username});
        const registeredUser= await User.register(newUser,password);
        // console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to TasteTrial");
            res.redirect("/listings");
        })
        
    } catch (e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

//login form
module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};

//login
module.exports.login = (req,res)=>{
    req.flash("success","You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

//logout
module.exports.logOut = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    })
};