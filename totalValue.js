let express = require('express');
const newItem = require("./newItem");
let router = express.Router();



router.get('/', function (req, res) {
    let Value = 0;
    if(newItem.DB != null) {
        newItem.DB.forEach(function (item) {
            Value += item.cost;

        });
        res.send(Value.toString());
    }
    else{
        res.send('Database is empty');
    }
});

module.exports = router;