var express = require('express');
var router = express.Router();
const session = require("express-session");

const  sign_up_controller = require("../controllers/sign-up-controller");
const sign_in_controller = require("../controllers/log-in-controller");
const app = require('../app');

/* GET sign-up page. */
router.get('/sign-up', sign_up_controller.sign_up_get);

router.post('/sign-up', sign_up_controller.sign_up_post);

/* index */
router.get('/', sign_in_controller.index);

/* POST sign-in */
router.post('/log-in', sign_in_controller.sign_in_post);

/* GET index */
router.post('/log-out', sign_in_controller.log_out_post);

module.exports = router;
