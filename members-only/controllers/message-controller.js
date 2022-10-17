const passport = require("passport");
const message = require('../models/message');
const Message = require('../models/message');
const User = require("../models/user");

exports.index = (req, res, next) => {
    Message.find({}, ).populate('user').exec(function (err, message_list) {
        if (err) {
            return next(err);
        }
        res.render("index",{
            user: req.user,
            messages: message_list
        } )
    })
    };


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
    
};

exports.message_list_get = [
    (req, res, next) => {
        Message.find({}, "message, user").populate('user').exec(function (err, message_list) {
            if (err) {
                return next(err);
            }
            res.render(index )
        })
    }
            
        
]