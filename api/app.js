const express = require('express');
const app = express();
const cors = require('cors')
const products = require('../routes/product');
const auth = require('../routes/auth');
const order = require('../routes/order')


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cors());

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

module.exports = app