const express = require('express');

const router = express.Router();


// Get
router.get('/', (req, res) => {
    res.send('login page');
})

module.exports = router;