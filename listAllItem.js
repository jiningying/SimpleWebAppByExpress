let express = require('express');
const newItem = require("./newItem");

let router = express.Router();

function generateList() {
    let st = 'Id  Name  Quantity  Price  Cost  </br>';
    let db = newItem.DB;

    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity +' | '+ db[i].price + ' | '+ db[i].cost + '</br>';
    }
    return st;
}

router.get('/', function (req, res) {
    res.send(generateList());

});

module.exports = router;