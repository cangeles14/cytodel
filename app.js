// ---------------- Required Packages ----------------------//

var express                 = require('express'),
    app                     = express (),
    bodyParser              = require('body-parser'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    User                    = require('./models/user'),
    methodOverride          = require('method-override');

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));
require('dotenv').config();

// ---------------- Required Routes ----------------------//

var indexRoutes             = require("./routes/index");
app.use(indexRoutes);

// ---------------- MongoDB Config ----------------------//

var url = process.env.DATABASEURL || "mongodb://localhost/cytodel";
mongoose.connect(url);


// ---------------- Passport/User Config ----------------------//

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(function(req,res,next){
//     res.locals.currentUser = req.user;
//     next();
// });

// ---------------- Landing Route ----------------------//

app.get("/", function(req,res){
   res.redirect("/home"); 
});

// ---------------- Listen Port ----------------------//

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started"); 
});