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

// ---------------- Required Routes ----------------------//

var indexRoutes             = require("./routes/index");
app.use(indexRoutes);

// ---------------- MongoDB Config ----------------------//

mongoose.connect("mongodb://localhost/cytodel | mongodb://<christopher>:<chris14>@ds229609.mlab.com:29609/cytodel");

// ---------------- Passport/User Config ----------------------//

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

// ---------------- Landing Route ----------------------//

app.get("/", function(req,res){
   res.render("home"); 
});

// ---------------- Listen Port ----------------------//

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started"); 
});