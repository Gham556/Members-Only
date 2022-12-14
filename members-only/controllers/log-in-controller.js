const express = require('express');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user');
const bcrypt = require("bcryptjs");


const app = express();

passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        console.log(user)
        if (err) { 
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
          bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
                console.log('success', user)
              // passwords match! log user in
              return done(null, user)
            } else {
              console.log(password, '', user.password)
              console.log(res)
              // passwords do not match!
              return done(null, false, { message: "Incorrect password" })
            };
          })};
      });
    })
  );

  
  passport.serializeUser(function(user, done) {
    console.log('serilize user')
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log('deserilize user')
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
 
  
exports.sign_in_post = passport.authenticate("local", {
      session: true, 
      successRedirect: "/",
      successMessage: true,
      failureRedirect: "/",
      failureMessage: false
    });
  


exports.log_out_get =  (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        console.log(err)
        return next(err);
      }
      res.redirect("/");
    });
  };