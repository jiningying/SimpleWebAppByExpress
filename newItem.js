let express = require('express');
let router = express.Router();
const DB = [];

router.get('/:Name/:Quantity/:Price', function (req, res) {
    let NewItem = {id : Math.round(Math.random()*1000), name : req.params.Name, quantity : req.params.Quantity, price : req.params.Price,  cost: req.params.Quantity * req.params.Price
    };

    DB.push(NewItem);
    console.log(DB);

    res.send("New item has been successfully added");
    module.exports.DB = DB;

});
module.exports = router;