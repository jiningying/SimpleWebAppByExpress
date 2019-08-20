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

router.get('/:ID', function (req, res) {
    let Item = "";
    if(newItem.DB != null) {

        for (let i = 0; i < newItem.DB.length; i++) {
            // console.log(newItem.DB[i].id, req.params.ID);

            if (newItem.DB[i].id.toString() === req.params.ID.toString()) {
                // Item = newItem.DB[i];
                newItem.DB.splice(i, 1);
                res.send(generateList());
                break;
            }

            if (i + 1 === newItem.DB.length){
                res.send('Sorry the item corresponds to the item cannot be found');
            }
        }

    }else{
        res.send('empty Database');
    }

});

module.exports = router;