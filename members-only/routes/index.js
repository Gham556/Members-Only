var express = require('express');
var router = express.Router();
const session = require("express-session");
const passport = require("passport");


const  sign_up_controller = require("../controllers/sign-up-controller");
const sign_in_controller = require("../controllers/log-in-controller");
const message_controller = require("../controllers/message-controller");
const app = require('../app');

router.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({ extended: false }));

/* GET sign-up page. */
router.get('/sign-up', sign_up_controller.sign_up_get);

router.post('/sign-up', sign_up_controller.sign_up_post);

/* index */
router.get('/', sign_in_controller.index);

/* POST sign-in */
router.post('/log-in', sign_in_controller.sign_in_post);

/* GET log-out */
router.get('/log-out', sign_in_controller.log_out_get);

/*Post Message */
router.post('/', message_controller.new_message_post);
module.exports = router;
