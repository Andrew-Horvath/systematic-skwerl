const express = require('express');
const app = express();
const inventoryController = require('./src/controllers/inventory');
const usersCtrl = require('./src/controllers/user');

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/inventory', inventoryController);
app.use('/users', usersCtrl);

const port = 4000;
app.listen(port, () => {
    console.log('App is now listening on port ', port);
});