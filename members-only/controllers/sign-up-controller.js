const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.sign_up_get = (req, res) => {
    res.render("sign-up-form")
};

exports.sign_up_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    }).save(err => {
      if (err) { 
        return next(err);
      }
      res.redirect("/");
    });
  });
};


