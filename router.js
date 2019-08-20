let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send('Welcome to the warehouse management system!!');
});

module.exports = router;