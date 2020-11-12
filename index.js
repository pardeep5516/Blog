require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

//!controllers
const homePageController = require("./controller/home");
const contactPageController = require("./controller/contact");
const registerPageController = require("./controller/register");
const loginPageController = require("./controller/login");
const createPageController = require("./controller/create");
const singlePostPageController = require("./controller/post");
const newPostController = require("./controller/newPost");
const userLiginController = require("./controller/userLogin");
const userRegisterController = require("./controller/userRegister");
const newContactController = require("./controller/newContact");

//!Post database Schema
const Post = require("./database/models/postSchema");
const User = require("./database/models/userSchema");
const { use } = require("passport");
const Comment = require("./database/models/comment");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//!session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//!passport
app.use(passport.initialize());
app.use(passport.session());

//!connection to database
mongoose.connect("mongodb://localhost:27017/myBlogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//!hide deprecationwarnig in mongoose datbase
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//!home
app.get("/", homePageController);

//!contact
app.get("/contact", contactPageController);

//!register
app.get("/register", registerPageController);

//!login
app.get("/login", loginPageController);

//!create
app.get("/create", createPageController);

//!singlePost
app.get("/:postId", singlePostPageController);

//!logout
app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/", { auth: req.isAuthenticated() });
  console.log(req.isAuthenticated());
});

//!newPost
app.post("/newPost", newPostController);

//!register user
app.post("/register", userRegisterController);

//!login user
app.post("/login", userLiginController);

//!constact
app.post("/contact", newContactController);

//!comment
app.post("/posts/comments", (req, res) => {
  Comment.create(req.body)
    .then((comment) => {
      console.log(comment);
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.listen(process.env.PORT, function () {
  console.log(`Server started on port ${process.env.PORT}`);
});
