var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.home);

/* GET Project page. */
router.get('/project', indexController.projects);

/* GET Project page. */
router.get('/about', indexController.about);

/* GET Project page. */
router.get('/contact', indexController.contact);

/* GET Project page. */
router.get('/services', indexController.services);

module.exports = router;
