const express = require('express');
const router = express.Router();
const db = require('../config/database.js');

router.get('/settings',function (req,res) {
    res.send('settings page')
});

module.exports = router;
