const User=require("../models/user");


module.exports.renderSignupForm = (req,res)=>{
    res.render("./users/signup.ejs");
};   // render sign in route function

module.exports.signup = async (req,res)=>{

    try{
    let {username, email, password} =req.body;
    const newUser = new User({email, username});
    const registeredUser= await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    })}
    
    catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");

    }
};    //post signup form
 
module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};                 //render login for

module.exports.login =async(req,res)=>{
    req.flash("success","Welcome back to wanderlust");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

};    //post login form

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);

        }
        req.flash("success","You logged out ");
        res.redirect("/listings");
    });
};  //logout route function