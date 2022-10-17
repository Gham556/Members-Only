const passport = require("passport");
const message = require('../models/message');
const Message = require('../models/message');


exports.new_message_post = (req, res, next) => {
    console.log(req.user)
    const message = new Message({
        message: req.body.message,
        user: req.user   
    });
    message.save((err) => {
        if(err) {
            return next(err);
        } 
        res.redirect('/');
    });
    
}