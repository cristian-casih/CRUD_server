const express = require('express');
const router = express.Router();

//router
router.use('/person', require('./person.routes'));

module.exports = router;