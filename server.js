let express = require('express');
let app = express();


let indexRouter = require('./router');
let newItemRouter = require('./newItem');
let listAllItemRouter = require('./listAllItem');
let deleteItemRouter = require('./deleteItem');
let totalValueRouter = require('./totalValue');

app.use('/', indexRouter);
app.use('/newItem', newItemRouter);
app.use('/listAllItems',listAllItemRouter);
app.use('/deleteItem',deleteItemRouter);
app.use('/totalValue',totalValueRouter);

app.listen(8080);



