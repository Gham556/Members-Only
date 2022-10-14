var express = require('express');
var router = express.Router();

const  sign_up_controller = require("../controllers/sign-up-controller");

/* GET sign-up page. */
router.get('/sign-up', sign_up_controller.sign_up_get);

router.post('/sign-up', sign_up_controller.sign_up_post);

module.exports = router;
