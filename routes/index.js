// ---------------- Required Packages ----------------------//

var express = require('express');
var router = express.Router();
// var passport = require('passport');
// var User = require('../models/user');

// ---------------- Register ----------------------//

router.get("/register", function(req,res){
    res.render("register");
});

// ---------------- Sign Up ----------------------//

// router.post("/register", function(req,res){
//     var newUser = new User({username:req.body.username});
//     User.register(newUser, req.body.password, function(err, user){
//         if(err) {
//             return res.redirect("register");
//         }
//         passport.authenticate("local")(req,res, function(){
//             res.redirect("/home");
//         });
//     });
// });
// ---------------- Login ----------------------//

// router.get("/login", function(req,res){
//     res.render("login");
// });

// router.post("/login", passport.authenticate("local", 
//     {
//         failureRedirect: "/login",
//     }), function(req,res){
//         res.redirect("/home");
// });
// ---------------- Logout ----------------------//

// router.get("/logout", function(req,res){
//     req.logout();
//     res.redirect("/home");
// });

// ---------------- Home ----------------------//

router.get("/home", function(req,res){
    res.render("home");
});
// ---------------- About ----------------------//

router.get("/about", function(req,res){
    res.render("about");
});
// ---------------- Technology ----------------------//

router.get("/technology", function(req,res){
    res.render("technology");
});
// ---------------- Our Products ----------------------//

router.get("/products", function(req,res){
    res.render("products");
});
// ---------------- Team ----------------------//

router.get("/team", function(req,res){
    res.render("team");
});
// ---------------- Patents and Publications ----------------------//

router.get("/publications", function(req,res){
    res.render("publications");
});
// ---------------- Contact Us ----------------------//

router.get("/contact", function(req,res){
    res.render("contact");
});
// ---------------- Exports ----------------------//

module.exports = router;